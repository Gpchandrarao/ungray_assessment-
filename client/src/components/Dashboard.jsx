import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import DashboardOne from "./DashboardOne";
import DashboardTwo from "./DashboardTwo";
import DashboardSix from "./DashboardSix";
const Dashboard = () => {
  const [yearData, setYearData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [customerDevice, setCustomerDevice] = useState([]);

  useEffect(() => {
    getComparsion();
    getPoducts();
    getCustomer();
  }, []);

  const getPoducts = async () => {
    const productsUrl = "http://localhost:5001/products";
    const res = await fetch(productsUrl);
    const data = await res.json();
    const formateData = data.map((each) => ({
      product: each.Product,
      rating: each.rating,
      revenue: each.revenue,
      soldAmount: each.soldAmount_amount,
      unitPrice: each.unit_price,
    }));
    setProductData(formateData);
  };

  const getComparsion = async () => {
    const comparsionUrl = "http://localhost:5001/comparison";
    const res = await fetch(comparsionUrl);
    const data = await res.json();
    const formateData = data.map((each) => ({
      Month: each.Month,
      lastYear: each.Last_year,
      thisYear: each.This_year,
    }));
    setYearData(formateData);
  };
  const getCustomer = async () => {
    const customerUrl = "http://localhost:5001/customersbydevice";
    const res = await fetch(customerUrl);
    const data = await res.json();
    const formateData = data.map((each) => ({
      date: each.date,
      offlineSales: each.offline_sales,
      webSales: each.web_sales,
    }));
    setCustomerDevice(formateData);
  };

  return (
    <div className="dashbord-container">
      <div className="dash-starting-container">
        <div className="heading-container">
          <h1>Dashboard</h1>
          <div className="compare-option-container">
            <p>Compare to</p>
            <select className="select-container">
              <option className="option"> Last Year</option>
              <option className="option"> This Year</option>
            </select>
          </div>
        </div>
        <div>
          <DashboardOne />
          <DashboardTwo />
          <DashboardSix />
        </div>
      </div>
      <div className="midel-items-continers">
        <div className="dash-three-container">midel</div>
        <div className="dash-four-container">end</div>
        <div className="dash-five-container">end</div>
      </div>
    </div>
  );
};

export default Dashboard;
