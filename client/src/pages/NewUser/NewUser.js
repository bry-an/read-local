import React, { Fragment, Component } from "react";
import ReactModal from 'react-modal';
import { Row, Col } from "../../components/Grid";
import { FormBtn, Input, Label } from "../../components/Form";

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

class NewUser extends Component {
  
  state = {
      showModal: false
    };
	
	componentDidMount() {
        this.setState({ showModal: true });
    }
  
  render() {
    return (
		<Fragment>
			<div className="newUserModal">
			<ReactModal 
			   isOpen={this.state.showModal}
			   contentLabel="onRequestClose Example"
			   onRequestClose={this.handleCloseModal}
			   shouldCloseOnOverlayClick={true}
			   style={customStyles}
			>
            <form>
			  <Row>
				<Col size="six columns">
				  <Label forHtml="firstName">First Name</Label>
				  <Input className="u-full-width" type="text" placeholder="ex. John" id="firstName"></Input>
				</Col>
				<Col size="six columns">
				  <Label forHtml="lastName">Last Name</Label>
				  <Input className="u-full-width" type="text" placeholder="ex. Smith" id="lastName"></Input>
				</Col>
			  </Row>
			  <Row>
				<Col size="six columns">
				  <Label forHtml="newUserEmail">Your email</Label>
				  <Input className="u-full-width" type="email" placeholder="test@mailbox.com" id="newUserEmail"></Input>
				</Col>
				<Col size="six columns">
				  <Label forHtml="newUserPassword">First Name</Label>
				  <Input className="u-full-width" type="password" placeholder="Password" id="newUserPassword"></Input>
				</Col>
			  </Row>
			  <FormBtn class="button-primary" type="submit">Submit</FormBtn>
			</form>
			</ReactModal>
			</div>
		</Fragment>
    );
  }
}

export default NewUser;