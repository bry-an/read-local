import React from "react";
import "./Footer.css";

const Footer = props => (
  <nav className={"footNavbar"}>
    <a href={props.forHtml} target={props.target} rel={props.rel}>
	{props.children}
    </a>
  </nav>
);

export default Footer;
