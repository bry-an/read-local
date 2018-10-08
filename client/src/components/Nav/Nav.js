import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className={"navbar"}>
    <a className="navbar-brand" href={props.forHtml} target={props.target} rel={props.rel}>
	{props.children}
    </a>
  </nav>
);

export default Nav;
