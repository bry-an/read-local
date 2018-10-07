import React from "react";

const Nav = props => (
  <nav className={`navbar navbar-expand-lg ${props.color} ${props.bottom}`}>
    <a className="navbar-brand" href={props.forHtml} target={props.target} rel={props.rel}>
	{props.children}
    </a>
  </nav>
);

export default Nav;
