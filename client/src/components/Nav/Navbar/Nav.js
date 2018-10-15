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

  // componentDidUpdate() {
  //   if (this.state.selectState !== "State") {
  //     // this.setState({cityItems: []});
  //     API.getCities(this.state.selectState)
  //     .then(res => {
  //       console.log(res);
  //       {this.setState({cityDisplay: "cityDisplayTrue"})};
  //       {this.setState({cityItems: res.data})};
  //     })
  //   }
  // }

  stateClick(event) {
    console.log("in stateClick", event.target.value);
    this.setState({ cityItems: []});
    this.setState({ selectState: event.target.value });
    API.getCities(event.target.value)
      .then(res => {
        console.log(res);
        {this.setState({cityDisplay: "cityDisplayTrue"})};
        {this.setState({cityItems: res.data})};
      })
  }

  cityClick(event) {
    console.log(event.target.value);
    window.location.assign("/articles");

  }

  render() {
    return (
      <nav className={"navbar"}>

        <Row>
          <Col size="five columns">
            <NavLink href="/" />
          </Col>
          <Col size="two columns" colId="cityCol" >
            <select className={this.state.cityDisplay}
            onChange={this.cityClick} id="citySelect"  defaultValue="City">
              {/* <option ></option> */}
              {this.state.cityItems.map(item => <Select options={item.city} key={item._id} />)}
            </select>
          </Col>
          <Col size="one column" colId="stateSel">
            <select defaultValue={this.state.selectState}
                onChange={this.stateClick}
             name="state">
              <option value="" >State</option>
              {this.state.stateItems.map(item => <Select
                options={item.usstate}
                key={item._id} />)}
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
            <NavLogin value={this.state.logState} />
          </Col>
        </Row>
      </nav>
    )
  }
}

export default Nav;