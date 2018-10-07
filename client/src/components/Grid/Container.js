import React from "react";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}
  style={{marginBottom:50}}>
    {children}
  </div>
);
