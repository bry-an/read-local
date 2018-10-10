import React from "react";
import { Col, Row } from "../../components/Grid";
import NavSearch from "../../components/NavSearch";
import NavLogin from "../../components/NavLogin";
import NavLink from "../../components/NavLink";
import "./Nav.css";

const Nav = props => (
  <nav className={"navbar"}>
    <Row>
      <Col size="five columns">
        <NavLink/>
      </Col>
      <Col size="five columns">
        <NavSearch/>
      </Col>
      <Col size="two columns">
        <NavLogin/>
      </Col>
    </Row>
  </nav>
);

export default Nav;
