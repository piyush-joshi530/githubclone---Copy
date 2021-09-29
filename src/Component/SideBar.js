import React from "react";
import Avatar from "@mui/material/Avatar";
import "./SideBar.css";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";

const SideBar = () => {
  return (
    <>
      <div className="bootom_border">
        {/* <hr style={{ marginTop: "5rem" }} /> */}
      </div>
      <div className="sidebar1">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 225, height: 225 }}
        />
        <h2 style={{ marginTop: "15px" }}>Piyush Joshi</h2>
        <p>piyush-joshi530</p>
        <Button variant="outlined">EditProfile</Button>
        <div>
          <GroupIcon />
          Follower Following
        </div>
      </div>
    </>
  );
};

export default SideBar;
