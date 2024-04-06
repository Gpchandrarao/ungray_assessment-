const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const { open } = require("sqlite");

const app = express();
app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "data.db");

let db = null;
const initializeDbServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    await db.exec(`
        CREATE TABLE IF NOT EXISTS tabel1(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            Month TEXT,
            Last_year TEXT,
            This_year TEXT
        );
        `);
    await db.exec(`
        CREATE TABLE IF NOT EXISTS tabel2(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            Product DATETIME,
            sold_amount TEXT,
            unit_price TEXT,
            revenue TEXT,
            rating TEXT

        );
        `);
    await db.exec(`
        CREATE TABLE IF NOT EXISTS tabel3(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            web_sales TEXT,
            offline_sales TEXT
        );
        `);

    const checkTableData = async (tableName) => {
      const data = `SELECT COUNT(*) as count FROM ${tableName}`;
      const result = await db.get(data);
      return result.count > 0;
    };

    const tablesToCheck = ["tabel1", "tabel2", "tabel3"];
    const promises = tablesToCheck.map((table) => checkTableData(table));

    Promise.all(promises).then(async (results) => {
      if (!results.includes(false)) {
        console.log(
          "Data already exists in the tables. Skipping data insertion."
        );
        return;
      }

      const xlsx = require("xlsx");

      function readExcelFile(filePath) {
        const workbook = xlsx.readFile(filePath);
        const sheetNames = workbook.SheetNames;

        const dataSheets = {};

        sheetNames.forEach((sheet) => {
          const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
          dataSheets[sheet] = jsonData;
        });

        return dataSheets;
      }

      const excelData = readExcelFile("assignment_data.xlsx");

      async function insertDataIntoTable(tableName, data) {
        return new Promise(async (resolve, reject) => {
          try {
            await db.run("BEGIN TRANSACTION");

            const sql = `INSERT INTO ${tableName} (${Object.keys(data[0]).join(
              ","
            )}) VALUES (${Object.keys(data[0])
              .map(() => "?")
              .join(",")})`;
            const stmt = await db.prepare(sql);

            data.forEach((row) => {
              stmt.run(Object.values(row));
            });

            stmt.finalize();

            await db.run("COMMIT");

            resolve();
          } catch (error) {
            reject(error);
          }
        });
      }

      try {
        await insertDataIntoTable("tabel1", excelData["2"]);
        await insertDataIntoTable("tabel2", excelData["6"]);
        await insertDataIntoTable("tabel3", excelData["4"]);

        console.log("Data inserted into tables.");
      } catch (error) {
        console.error("Error inserting data into tables:", error);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

initializeDbServer();

app.listen(5001, () => {
  console.log("app listening on port: https://localhost/5001");
});

app.get("/comparison", async (req, res) => {
  const data = `SELECT * FROM tabel1`;
  const result = await db.all(data);
  res.send(result);
});
app.get("/products", async (req, res) => {
  const data = `SELECT * FROM tabel2`;
  const result = await db.all(data);
  res.send(result);
  console.log("respose SEND");
});

app.get("/customersbydevice", async (req, res) => {
  const data = `SELECT * FROM tabel3`;
  const result = await db.all(data);
  res.send(result);
  console.log(result);
});
