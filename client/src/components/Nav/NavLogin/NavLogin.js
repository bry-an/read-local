import React, { Component, Fragment } from "react";
import ReactModal from 'react-modal';
import { Label, Input, FormBtn } from "../../Form";
import "./NavLogin.css";
import axios from "axios";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

ReactModal.setAppElement('#modal');

class NavLogin extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      login: "",
      password: ""
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    console.log(this.state.login, this.state.password);
     const loginData = { login_email: this.state.login, password: this.state.password };
     axios.post("/auth/login", loginData)
     .then(res => console.log(res))
     .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  render () {
    return (
      <Fragment>
		<a className="navbar-login" href={this.props.forHtml} target={this.props.target} rel={this.props.rel} id="loginModal" onClick={this.handleOpenModal}>
			{this.props.value}
		</a>
		<div className="loginModal">
			<ReactModal 
			   isOpen={this.state.showModal}
			   contentLabel="onRequestClose Example"
			   onRequestClose={this.handleCloseModal}
			   shouldCloseOnOverlayClick={true}
			   style={customStyles}
			>
			<Label htmlFor="login">
				Username
			</Label>
      <Input 
        name="login" 
        type="text"
        value={this.state.login}
        onChange={this.handleInputChange}
        placeholder="Username"/>
			<Label htmlFor="password">
				Password
			</Label>
      <Input 
        name="password" 
        type="password" 
        value={this.state.password}
        onChange={this.handleInputChange}
        placeholder="Password"/>
			<FormBtn onClick={this.handleCloseModal} id="loginBtn">Log In</FormBtn>
			<FormBtn onClick={this.handleCloseModal} id="cancel">Cancel</FormBtn>
			<p className="newUser" >New user? <a id="newUserSpan" href="newuser">Click here</a></p>
			</ReactModal>
		</div>
      </Fragment>
    );
  }
}

export default NavLogin;