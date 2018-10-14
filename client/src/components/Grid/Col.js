import React from "react";

export const Col = (props) => (
  <div className={props.size.split(" ").map(size => size).join(" ")} id={props.colId}>
    {props.children}
  </div>
);
