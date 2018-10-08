import React from "react";

export const Container = ({ children }) => (
  <div className="container"
  style={{marginBottom:50, border: "1px solid red"}}>
    {children}
  </div>
);
