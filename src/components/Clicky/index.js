import React from "react";
import "./style.css";

function Clicky(props) {
  return (
    <div>
      <img
        alt={props.name}
        src={props.image} 
        onClick={() => props.tagPic(props.id)} 
        className="img-thumbnail"/>
    </div>
  );
}

export default Clicky;