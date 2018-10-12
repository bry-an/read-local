import React, { Component } from "react";

import Map from  "../../components/Map";

import { Col, Row } from "../../components/Grid";
import GoogleMap from '../../components/Map/GoogleMap'


class Home extends Component {
  render() {
    return (

        <Row>
          <Col size="twelve columns">
            <GoogleMap />
          </Col>
        </Row>

    );
  }
}

export default Home;
