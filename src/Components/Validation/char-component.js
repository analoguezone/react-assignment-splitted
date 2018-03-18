import React from "react";
import './box.css';

const char = (props) =>
  <div className="box" onClick={props.click}>{props.letter}
  </div>

export default char;
