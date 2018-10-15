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
	cityDisplay: "cityDisplayTrue",
    logState: "Login",
    selectState: "State"
  }

  componentDidMount() {
    API.fillStates()
      .then(res =>  {this.setState({ stateItems: res.data});
    console.log(res.data, this.state.stateItems[0])}
  )
    .catch(err => console.log(err));
  }

  handleInputChange(event) {
    this.setState({ selectState: event.target.value })
    .then(
      //make dropdown visible and fill with cities
    )
  }

  render() {
    return (
      <nav className={"navbar"}>
      
        <Row>
          <Col size="five columns">
            <NavLink href="/"/>
          </Col>
          <Col size="two columns" colId="cityCol" >
			<select className={this.state.cityDisplay} id="citySelect">
      <option value="" disabled hidden >City</option>
				{this.state.cityItems.map(item=><Select options={item.city} key={item.city} />)}
			  </select>
		  </Col>
          <Col size="one column" colId="stateSel">
          <select  defaultValue={this.state.selectState} name="state">
          <option value="" disabled hidden >State</option>
              {this.state.stateItems.map(item => <Select
                options={item.usstate}
                key={item._id}
              handleInputChange={this.handleInputChange} />)}
            </select>
          </Col>
		  
      <Col size="three columns" colId="searchSel">
          <NavSearch
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="Keyword Search"
              />
          </Col>

          <Col size="one column" colId="navLogin">
            <NavLogin value={this.state.logState}/>
          </Col>
        </Row>
      </nav>
    )
  }
}

export default Nav;