import React from "react";
import "./style.css";

function Gameboard(props) {
  return (
    <div className="container gameBoard">
      {props.children}
    </div>
  );
}

export default Gameboard;