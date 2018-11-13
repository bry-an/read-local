import React from "react";
import "./NavLink.css";
import { Link } from "react-router-dom";

const NavLink = props => (
    <Link className="navbar-link" {...props}>
        Think National, <span className="red">Read Local</span>
    </Link>
)

export default NavLink;