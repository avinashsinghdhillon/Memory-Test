import React from "react";
import "./style.css";

function Clicky(props) {
  return (
    <div className="img-thumbnail">
      <img
        alt={props.name}
        src={props.image} 
        onClick={() => props.tagPic(props.id)}
      />
    </div>
  );
}

export default Clicky;