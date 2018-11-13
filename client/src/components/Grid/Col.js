import React from "react";

export const Col = (props) => (
  <div className={props.size} id={props.colId}>
    {props.children}
  </div>
);
