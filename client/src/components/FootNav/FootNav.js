import React from "react";
import "./FootNav.css";

const FootNav = props => (
  <nav className={"footNavbar"}>
    <a href={props.forHtml} target={props.target} rel={props.rel}>
	{props.children}
    </a>
  </nav>
);

export default FootNav;
