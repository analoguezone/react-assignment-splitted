import React from "react";

const textinput = (props) =>
    <div>
      <input
        onChange={props.changeHandler}
        value={props.inputValue} />
      <p> Length: {props.length}</p>
    </div>

export default textinput;
