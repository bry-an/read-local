import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";


class Article extends Component {
  state = {
    articles: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <Container>
        <Row>
          <Col size="twelve columns">
            <Map />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Article;
