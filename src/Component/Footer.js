import React from "react";
import logo from "../Image/githublogo.jfif";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <ul>
        <li>2021 GitHub,Inc</li>
        <li>
          <a href="/">Terms</a>
        </li>
        <li>
          <a href="/">Privacy</a>
        </li>
        <li>
          <a href="/">Security</a>
        </li>
        <li>
          <a href="/">Status</a>
        </li>
        <li>
          <a href="/">Docs</a>
        </li>
        <li>
          <img
            style={{ width: "25px", height: "25px" }}
            src={logo}
            alt="nothing"
          />
        </li>
        <li>
          <a href="/">Conatact GitHub</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Api</a>
        </li>
        <li>
          <a href="/">Training</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
