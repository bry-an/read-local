import React from "react";
import "./NavLogin.css";

const NavLogin = props => (
    <a className="navbar-login" href={props.forHtml} target={props.target} rel={props.rel}>
        {props.value}
    </a>
)

export default NavLogin;