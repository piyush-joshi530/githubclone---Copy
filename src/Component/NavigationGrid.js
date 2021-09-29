import React, { useState } from "react";
import "./NavigationGrid.css";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
// import Box from "@mui/material/Box";
import logo from "../Image/githublogo.jfif";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const NavigationGrid = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div className="main-navbar">
        {/* logo display */}
        <img className="logoimg logomobileview " src={logo} alt="nothing" />
        <div className="searchbar">
          {/* <Box
            style={{ border: "1px solid red" }}
            sx={{ "& > :not(style)": { m: 1 } }}
          > */}
          <FormControl
            style={{ backgroundColor: "transparent" }}
            variant="standard"
          >
            {/* <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel> */}
            <Input
              style={{
                border: "1px solid white",
                borderRadius: "4px",
                color: "white",
                width: "250px",
                height: "1.5rem",
                padding: "2px",
              }}
              placeholder="search or jump to..."
              variant="outline"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              }
            />
          </FormControl>
          {/* </Box> */}
        </div>
        {/* menu-Link */}
        <div className="menu-Link">
          <ul>
            <li>
              <a href="/">Pull requests</a>
            </li>
            <li>
              <a href="/service">Issues</a>
            </li>
            <li>
              <a href="/marketplace">Marketplace</a>
            </li>
            <li>
              <a href="explore">Explore</a>
            </li>
          </ul>
        </div>
        {/* notification bar */}
        <div className="notification-bar">
          <NotificationsNoneOutlinedIcon />
          <AddOutlinedIcon />
          <ArrowDropDownOutlinedIcon />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
          <ArrowDropDownOutlinedIcon />
        </div>

        <div className="mobileview">
          <IconButton onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <div className="mobileviewNotification">
          <NotificationsNoneOutlinedIcon />
        </div>

        <div
          className={showMediaIcons ? "mobile-menu-Link" : "toggle-mobile-menu"}
        >
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/">Pull requests</a>
            </li>
            <li>
              <a href="/">Issues</a>
            </li>
            <li>
              <a href="/">Marketplace</a>
            </li>
            <li>
              <a href="/">Explore</a>
            </li>
            <li>
              <a href="/">Codespaces</a>
            </li>
            <li>
              <a href="/">Sponsors</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationGrid;
