import React, { Component } from "react";
import { Col, Row } from "../..//Grid";
import NavSearch from "../NavSearch";
import NavLogin from "..//NavLogin";
import NavLink from "..//NavLink";
import { Select } from "../../Form";
import states from "../../../utils/States.json"
import "./Nav.css";
import API from "../../../utils/API";

class Nav extends Component {

  state = {
    listItems: [],
    logState: "Login"
  }

  componentDidMount() {
    API.fillStates()
      .then(res =>  {this.setState({ listItems: res.data});
    console.log(res.data, this.state.listItems)}
  )
      .catch(err => console.log(err));
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
            {this.state.listItems.map(item=><Select options={item.usstate} key={item.usstate}/>)}
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
          <Col size="two columns" loginId="navLogin">
            <NavLogin value={this.state.logState}/>
          </Col>
        </Row>
      </nav>
    )
  }
}

export default Nav;
