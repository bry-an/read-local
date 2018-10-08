import React from "react";

export const MapContainer = ({ children }) => (
  <div className="mapContainer"
  style={{marginBottom:50, border: "1px solid red"}}>
    {children}
  </div>
);