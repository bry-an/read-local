import React, { Component } from "react";

import Map from  "../../components/Map";

import { Col, Row, Container } from "../../components/Grid";
import GoogleMap from '../../components/Map/GoogleMap'


class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="twelve columns">
            <GoogleMap />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
