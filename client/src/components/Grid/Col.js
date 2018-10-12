import React from "react";

export const Col = ({ size, loginId, children }) => (
  <div className={size.split(" ").map(size => size).join(" ")} id={loginId}>
    {children}
  </div>
);
