import React from "react";
import "./style.css";

function Navbar(props) {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li><h1>Memory Test</h1></li>
            <li><h3>Click on an image to begin game.</h3></li>
            <li>
              Score: {props.score} | Top Score: {props.topScore}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;