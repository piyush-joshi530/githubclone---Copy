import React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import "./TabsDisplay.css";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";

const TabsDisplay = () => {
  return (
    <div className="tabs-design">
      <ul>
        <li>
          <ImportContactsTwoToneIcon />
          <a href="/">Overview</a>
        </li>
        <li>
          <LocalPrintshopOutlinedIcon />
          <a href="/">Repositories</a>
        </li>
        <li>
          <AssessmentOutlinedIcon />
          <a href="/">Projects</a>
        </li>
        <li>
          <CasinoOutlinedIcon />
          <a href="/">Packages</a>
        </li>
      </ul>
    </div>
  );
};

export default TabsDisplay;
