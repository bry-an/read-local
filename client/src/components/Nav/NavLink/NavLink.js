import React from "react";
import "./NavLink.css";

const NavLink = props => (
    <a className="navbar-link" href={props.forHtml} target={props.target} rel={props.rel}>
        Think National, <span className="red">Read Local</span>
    </a>
)

export default NavLink;