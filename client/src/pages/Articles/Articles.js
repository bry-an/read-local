import React, { Component } from "react";

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
