import React, { Component } from "react";


import GoogleMapContainer from '../../components/Map/GoogleMapContainer'
import { Col, Row } from "../../components/Grid";


class Home extends Component {
  render() {
    return (

        <Row>
          <Col size="twelve columns">
            <GoogleMapContainer />
          </Col>
        </Row>

    );
  }
}

export default Home;
