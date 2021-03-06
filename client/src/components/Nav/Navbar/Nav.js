import React, { Component } from "react";
import { Container, Col, Row } from "../..//Grid";
import NavLogin from "..//NavLogin";
import NavLink from "..//NavLink";
import { Select } from "../../Form";
import "./Nav.css";
import { Link } from "react-router-dom";
import API from "../../../utils/API";

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stateItems: [],
      cityItems: [],
      cityDisplay: "cityDisplayFalse",
	  citiesDisplay: "citiesDisplayFalse",
      logState: "Login",
      selectState: "State",
      selectCity: "City"
    }
    this.stateClick = this.stateClick.bind(this);
  }

  getToken = () => {
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return "";
    }
  }

  componentWillMount() {
    API.fillStates()
      .then(res => {
        this.setState({ stateItems: res.data });
      })
      .catch(err => console.log(err));
  }

  loginState = () => {
    console.log(this);
    if (this.state.logState === "Login") {
      this.setState({logState: "Logout"});
    } else {
      this.setState({logState: "Login"});
    };
  }

  stateClick = (event) => {
    console.log("in stateClick", event.target.value);
    this.setState({ cityItems: [] });
    this.setState({ selectState: event.target.value });
    API.getCities(event.target.value)
      .then(res => {
        console.log(res);
         this.setState({ cityDisplay: "cityDisplayTrue" });
         this.setState({ cityItems: res.data });
      })
  }
  
  showCities = () => {
	if (this.state.citiesDisplay === "citiesDisplayFalse") {
		this.setState({citiesDisplay : "citiesDisplayTrue"})
		document.getElementById("citySelect").style.height="auto";
		document.getElementById("select").style.marginBottom="10px"
	} else {
		this.resetCity()
	}
	console.log(this.state.citiesDisplay)
  }
  
  resetCity = city => {    
	  this.setState({citiesDisplay : "citiesDisplayFalse"})
    document.getElementById("citySelect").style.height="36px";
    

  }

  render() {
    return (
      <nav className={"navbar"}>
      <Container>
        <Row>
          <Col size="six columns" colId="navLinkSpace">
            <NavLink to="/" />
          </Col>
          <Col size="three columns" colId="cityCol" >
            <ul className={this.state.cityDisplay} id="citySelect" >
              <li id="select" onClick={this.showCities}>Select City <span className="selectArrow">&#x25BC;</span></li>

              {this.state.cityItems.map(item => <li key={item._id} className="city"><Link to={`/articles/${item.city}`} className={`${this.state.citiesDisplay}`} onClick={()=>this.resetCity(item.city)} id={item.city}>{item.city}</Link></li>)
          }

            </ul>
          </Col>
          <Col size="two columns" colId="stateSel">
            <select defaultValue={this.state.selectState}
              onChange={this.stateClick}
              name="state">
              <option value="" >State</option>
              {this.state.stateItems.map(item => <Select
                options={item.usstate}
                key={item._id} />)}
            </select>
          </Col>

          <Col size="one column" colId="navLogin">
            <NavLogin value={this.state.logState} login={this.loginState} />
          </Col>
        </Row>
        </Container>
      </nav>
    )
  }
}

export default Nav;