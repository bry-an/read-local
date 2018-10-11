import React, { Component } from "react";
import API from "../../utils/API";
import  { MapTemp } from  "../../components/MapTemp";
import { Col, Row, Container } from "../../components/Grid";


class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="twelve columns">
            <MapTemp/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
