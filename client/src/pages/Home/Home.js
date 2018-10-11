import React, { Component } from "react";
import Map from  "../../components/Map";
import { Col, Row, Container } from "../../components/Grid";


class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="twelve columns">
            <Map/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
