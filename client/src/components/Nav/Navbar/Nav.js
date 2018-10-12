import React, { Component } from "react";
import { Col, Row } from "../..//Grid";
import NavSearch from "../NavSearch";
import NavLogin from "..//NavLogin";
import NavLink from "..//NavLink";
import { Select } from "../../Form";
import "./Nav.css";
import API from "../../../utils/API";

class Nav extends Component {

  state = {
    stateItems: [],
	cityItems: [],
	cityDisplay: "cityDisplayFalse",
    logState: "Login"
  }

  componentDidMount() {
    API.fillStates()
      .then(res =>  {this.setState({ stateItems: res.data});}
  )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <nav className={"navbar"}>
      
        <Row>
          <Col size="four columns">
            <NavLink forHtml="/"/>
          </Col>
		  <Col size="three columns">
          <NavSearch
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="Keyword Search"
              />
          </Col>
          <Col size="one column">
			  <select>
				{this.state.stateItems.map(item=><Select options={item.usstate} key={item.usstate}/>)}
			  </select>
          </Col>
		  <Col size="two columns">
			<select className={this.state.cityDisplay}>
				{this.state.cityItems.map(item=><Select options={item.city} key={item.city}/>)}
			  </select>
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
