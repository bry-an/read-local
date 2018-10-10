import React from "react";
import "./Sidebar.css";

const Sidebar = props => (
    <div className="sidebar">
        {props.children}
    </div>
)

export default Sidebar;