import React from "react";
import { Col, Row } from "../Grid";
import "./Footer.css";

const Footer = props => (
  <nav className={"footNavbar"}>
	  <Row>
	  <Col size="twelve columns">
		<a href={props.forHtml} target={props.target} rel={props.rel}>
		{props.children}
		</a>
		</Col>
		</Row>
  </nav>
);

export default Footer;
