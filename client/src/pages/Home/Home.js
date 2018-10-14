import React, { Component } from "react";
import GoogleMapContainer from '../../components/Map/GoogleMapContainer'
import { Container } from "../../components/Grid";


class Home extends Component {
  render() {
    return (
		<Container>
            <GoogleMapContainer />
		</Container>
    );
  }
}

export default Home;
