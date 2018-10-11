import React, { Component } from "react";
import ExampleApp from "../../components/Modal"
import { Col, Row, Container } from "../../components/Grid";


class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <ExampleApp />
        <Row>
          <Col size="four columns">
          
          Achoo!
          </Col>
          <Col size="eight columns">
          Achoo!
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
