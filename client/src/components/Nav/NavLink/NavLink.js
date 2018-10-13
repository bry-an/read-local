import React from "react";
import "./NavLink.css";

const NavLink = props => (
    <a className="navbar-link" {...props}>
        Think National, <span className="red">Read Local</span>
    </a>
)

export default NavLink;