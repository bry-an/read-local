import React, { Component } from "react";

import Map from  "../../components/Map";

import { Col, Row, Container } from "../../components/Grid";
import GoogleMapContainer from '../../components/Map/GoogleMapContainer'


class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="twelve columns">
            <GoogleMapContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
