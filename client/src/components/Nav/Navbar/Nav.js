import React from "react";
import { Col, Row } from "../../../components/Grid";
import NavSearch from "../NavSearch";
import NavLogin from "..//NavLogin";
import NavLink from "..//NavLink";
import "./Nav.css";

const Nav = props => (
  <nav className={"navbar"}>
    <Row>
      <Col size="five columns">
        <NavLink forHtml="/"/>
      </Col>
      <Col size="five columns">
        <NavSearch/>
      </Col>
      <Col size="two columns">
        <NavLogin />
      </Col>
    </Row>
  </nav>
);

export default Nav;
