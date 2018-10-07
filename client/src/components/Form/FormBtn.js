import React from "react";

export const FormBtn = props => (

  <button {...props} style={{ marginBottom: 10, width: 100, fontSize: "1.2em" }} className="btn btn-secondary btn-lg">
    {props.children}
  </button>

);
