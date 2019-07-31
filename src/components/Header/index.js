import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron topJumbo">
      <p className="title">Memory Test!</p>
      <p>Click on an image to get a point. Click on the same image twice and you lose the game!</p>
    </div>
  );
}

export default Header;