import React from "react";
import "../styles/DashboardSix.css";

const DashboardSix = ({ products }) => {
  return (
    <div className="dashboardsix-container">
      <div className="top-products-container">
        <h1>Top Products</h1>
        <p>Full results</p>
      </div>
      <div className="">
        <ul className="ul-container">
          <li>Product</li>
          <li>Sold amount</li>
          <li>Unit price</li>
          <li>Revenue</li>
          <li>Rating</li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default DashboardSix;
