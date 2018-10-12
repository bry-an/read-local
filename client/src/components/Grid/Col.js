import React from "react";

export const Col = ({ size, colId, children }) => (
  <div className={size.split(" ").map(size => size).join(" ")} id={colId}>
    {children}
  </div>
);
