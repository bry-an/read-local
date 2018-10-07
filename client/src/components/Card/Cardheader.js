import React from "react";

export const Cardheader = ({ children }) => (
  <div className="card-header" style= {{ fontSize: "2em", textAlign: "center"}}>
    {children}
  </div>
);
