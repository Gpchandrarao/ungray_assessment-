import React, { useState } from "react";
import svg from "../assets/icon.svg";
// import dashboardIcon from "../assets/dashboard-off.png";
import { MdOutlineDashboard } from "react-icons/md";

import profile from "../assets/profile.png";
import customer from "../assets/customer.png";

import "../styles/SideBar.css";

import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePower } from "react-icons/md";
// import { MdOutlineBarChart } from "react-icons/md";
import { LiaChartBarSolid } from "react-icons/lia";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";

const SideBar = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="sidebar-container">
      <div className="container-items">
        <div className="starting-container">
          <div
            className={`starting-items ${active === 8 ? "active" : ""}`}
            onClick={() => setActive(8)}
          >
            <img src={svg} alt="logo" className="svg-icon" />
            <h4>Salesway</h4>
          </div>
          <div
            className={`starting-items items ${active === 6 ? "active" : ""}`}
            onClick={() => setActive(6)}
          >
            <CiSettings className="icons" />
            <h4>Settings</h4>
          </div>
          <div
            className={`starting-items items ${active === 7 ? "active" : ""}`}
            onClick={() => setActive(7)}
          >
            <CgProfile className="icons" />
            <h4>Team</h4>
          </div>
        </div>
        {/* midel-container*/}

        <div className="midel-container">
          <p className="menu">MENU</p>
          <div
            className={`midel-items items ${active === 0 ? "active" : ""}`}
            onClick={() => setActive(0)}
          >
            <MdOutlineDashboard />
            <p>Dashboard</p>
          </div>
          <div
            className={`midel-items items ${active === 1 ? "active" : ""}`}
            onClick={() => setActive(1)}
          >
            <LiaChartBarSolid className="icons" />
            <p>Campaigns</p>
          </div>
          <div
            className={`midel-items items ${active === 2 ? "active" : ""}`}
            onClick={() => setActive(2)}
          >
            <MdOutlineAlignHorizontalLeft className="icons" />
            <p>Flows</p>
          </div>
          <div
            className={`midel-items items ${active === 3 ? "active" : ""}`}
            onClick={() => setActive(3)}
          >
            <MdOutlinePower className="icons" />
            <p>Integrations</p>
          </div>
          <div
            className={`midel-items items${active === 4 ? "active" : ""}`}
            onClick={() => setActive(4)}
          >
            <img src={customer} alt="" className="customer-img" />
            <p>Customers</p>
          </div>
        </div>
      </div>
      {/* end container */}
      <div className={`end-container`}>
        <img src={profile} alt="profile-img" className="profile-img" />
        <p className="profile-name">Tom Wang</p>
      </div>
    </div>
  );
};

export default SideBar;
