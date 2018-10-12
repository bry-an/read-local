import React, { Component } from "react";
import { Col, Row } from "../..//Grid";
import NavSearch from "../NavSearch";
import NavLogin from "..//NavLogin";
import NavLink from "..//NavLink";
import { Select } from "../../Form";
import states from "../../../utils/States.json"
import "./Nav.css";

class Nav extends Component {

  state = {
    stateNames: states,
    logState: "Login"
  }

  render() {
    return (
      <nav className={"navbar"}>
      
        <Row>
          <Col size="five columns">
            <NavLink forHtml="/"/>
          </Col>
          <Col size="two columns">
          <select>
            {this.state.stateNames.map(stateName=><Select options={stateName.stateName} key={stateName.stateName}/>)}
          </select>
          </Col>
          <Col size="three columns">
          <NavSearch
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="Keyword Search"
              />
          </Col>
          <Col size="two columns">
            <NavLogin value={this.state.logState}/>
          </Col>
        </Row>
      </nav>
    )
  }
}

export default Nav;
