import React from "react";

const validation = (props) => {

let validationMessage ='Too short';
if (props.length >= 5) {
  validationMessage ='ok, long enough'};

return (
  <p>{validationMessage}</p>

);

};
export default validation;
