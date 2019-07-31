import React from "react";
import "./style.css";
import logo from "../../logo.svg"

function Footer() {
  return (
    <div className="footer">
      <h3>Memory Test</h3>
      <img className="logo" alt="react" src={logo}></img>
    </div>
  );
}

export default Footer;