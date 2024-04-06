import React from "react";
import "../styles/DashboardTwo.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardTwo = ({ data }) => {
  const labels = data.map((item) => item.Month);
  const thisYearData = data.map((item) => parseInt(item.thisYear));
  const lastYearData = data.map((item) => parseInt(item.lastYear));

  const datasets = [
    {
      data: thisYearData,
      backgroundColor: "#B1EFFE",
      borderColor: "rgba(54, 162, 235, 1)",
      label: "This Year",
    },
    {
      data: lastYearData,
      backgroundColor: "#0067F6",
      borderColor: "rgba(255, 99, 132, 1)",
      label: "Last Year",
    },
  ];

  return (
    <div className="dashboardtwo-container">
      <div className="comparison-container">
        <p className="comparison">Comparison</p>
        <select className="select">
          <option>6 months</option>
          <option>1 Year</option>
        </select>
      </div>
      <div>
        <Bar
          className="bar"
          height={64000}
          width={1000}
          data={{ datasets, labels }}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            plugins: {
              ChartDataLabels: {
                anchor: "end", // Position labels at the end of bars
                content: "dataset.label", // Display dataset label
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DashboardTwo;
