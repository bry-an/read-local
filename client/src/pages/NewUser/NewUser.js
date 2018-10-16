import React, { Fragment, Component } from "react";
import ReactModal from 'react-modal';
import { Row, Col } from "../../components/Grid";
import { FormBtn, Input, Label, LinkBtn } from "../../components/Form";
import "./NewUser.css";
import axios from "axios";

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

ReactModal.setAppElement('#modal');

class NewUser extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
			email: "",
			password: "",
			firstName: "",
			lastName: ""
    };
    
    this.registerUser = this.registerUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

	componentDidMount() {
		this.setState({ showModal: true });
	}

	registerUser (event) {
		event.preventDefault();
    this.setState({ showModal: false });
    console.log(this.state);
     const regData = { 
			 email: this.state.email, 
			 password: this.state.password, 
			 firstname: this.state.firstName,
			 lastname: this.state.lastName };
     axios.post("/auth/register", regData)
     .then(res => console.log(res))
     .catch(err => console.log(err));
  }

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<Fragment>
				<div className="newUserModal">
					<ReactModal
						isOpen={this.state.showModal}
						contentLabel="onRequestClose Example"
						onRequestClose={this.handleCloseModal}
						shouldCloseOnOverlayClick={false}
						style={customStyles}
					>
						<form>
							<Row>
								<Col size="six columns">
									<Label htmlFor="firstName">First Name</Label>
									<Input className="u-full-width"
										type="text"
										placeholder="ex. John"
										value={this.state.firstName}
										onChange={this.handleInputChange}
										name="firstName"></Input>
								</Col>
								<Col size="six columns">
									<Label htmlFor="lastName">Last Name</Label>
									<Input className="u-full-width"
										type="text"
										placeholder="ex. Smith"
										value={this.state.lastName}
										onChange={this.handleInputChange}
										name="lastName"></Input>
								</Col>
							</Row>
							<Row>
								<Col size="six columns">
									<Label htmlFor="newUserEmail">Your email</Label>
									<Input className="u-full-width"
										type="email"
										placeholder="test@mailbox.com"
										value={this.state.email}
										onChange={this.handleInputChange}
										name="email"></Input>
								</Col>
								<Col size="six columns">
									<Label htmlFor="newUserPassword">First Name</Label>
									<Input className="u-full-width"
										type="password"
										placeholder="Password"
										value={this.state.password}
										onChange={this.handleInputChange}
										name="password"></Input>
								</Col>
							</Row>
							<FormBtn className="button-primary" type="submit" id="newUserCreate" onClick={this.registerUser}>Submit</FormBtn>
							<LinkBtn href="home" id="cancelNewUser">Cancel</LinkBtn>
						</form>
					</ReactModal>
				</div>
			</Fragment>
		);
	}
}

export default NewUser;