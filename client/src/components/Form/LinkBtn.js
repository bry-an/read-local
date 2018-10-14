import React from "react";
import "./Form.css"

export const LinkBtn = props => (

  <a {...props} className="button button-primary">
    {props.children}
  </a>

);
