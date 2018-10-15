import React, { Component } from "react";
import { Col, Row } from "../..//Grid";
import NavSearch from "../NavSearch";
import NavLogin from "..//NavLogin";
import NavLink from "..//NavLink";
import { Select } from "../../Form";
import "./Nav.css";
import API from "../../../utils/API";

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stateItems: [],
      cityItems: [],
      cityDisplay: "cityDisplayFalse",
      logState: "Login",
      selectState: "State",
      selectCity: "City"
    }
    this.stateClick = this.stateClick.bind(this);
  }
  componentDidMount() {
    API.fillStates()
      .then(res =>  {this.setState({ stateItems: res.data});
    console.log(res.data, this.state.stateItems[0])}
  )
    .catch(err => console.log(err));
  }

  componentDidUpdate() {
    if (this.state.selectState !== "State") {
      // this.setState({cityItems: []});
      API.getCities(this.state.selectState)
      .then(res => {
        {this.setState({cityDisplay: "cityDisplayTrue"})};
        {this.setState({cityItems: res.data})};
        console.log(res);
      })
    }
  }

  stateClick(event) {
    console.log(event.target.value);
    this.setState({ selectState: event.target.value })
    
  }

  cityClick(event) {
    console.log(event.target.value);

  }

  render() {
    return (
      <nav className={"navbar"}>
      
        <Row>
          <Col size="four columns">
            <NavLink href="/"/>
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
          <select  defaultValue={this.state.selectState}
              onChange={this.stateClick}  name="state">
          <option value="" disabled hidden >State</option>
              {this.state.stateItems.map(item => <Select
                options={item.usstate}
                key={item._id}/>)}
            </select>
          </Col>
		  <Col size="two columns" colId="cityCol" >
      <select className={this.state.cityDisplay}
        onChange={this.cityClick} id="citySelect">
      <option value="" disabled hidden >City</option>
				{this.state.cityItems.map(item=><Select options={item.city} key={item.city} />)}
			  </select>
		  </Col>
          
          <Col size="two columns" colId="navLogin">
            <NavLogin value={this.state.logState}/>
          </Col>
        </Row>
      </nav>
    )
  }
}

export default Nav;