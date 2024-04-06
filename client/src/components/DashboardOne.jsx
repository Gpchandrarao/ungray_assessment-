import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import "../styles/DashboardOne.css";

const DashboardOne = () => {
  return (
    <div className="dashboardone-container">
      <div className="purchases-container">
        <p className="purchases">Purchases</p>
        <div className="trendup-container">
          <p className="number">4,294</p>
          <p className="arrow-trend-up">
            +32% <FaArrowTrendUp />
          </p>
        </div>
      </div>
      <div className="purchases-container">
        <p className="purchases">Revenue</p>
        <div className="trendup-container">
          <p className="number">$322,3k</p>
          <p className="arrow-trend-up">
            +49% <FaArrowTrendUp />
          </p>
        </div>
      </div>
      <div className="purchases-container">
        <p className="purchases">Refunds</p>
        <div className="trendup-container">
          <p className="number">$8,2k</p>
          <p className="refunds-container">
            +7% <FaArrowTrendUp />
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOne;
