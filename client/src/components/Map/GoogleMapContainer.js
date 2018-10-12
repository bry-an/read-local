import React, { Fragment, Component } from 'react'
import GoogleMap from './GoogleMap'
import { Input } from "../Form"
import { Col, Row } from "../Grid";

const google = window.google
class GoogleMapContainer extends Component {


    state = {
        mapCenter: { lat: 39.755, lng: -96.99 },
        points: []
    }

    componentDidMount() {
        this.autoComplete()
    }

    setMapCenter = location => {
        console.log('setting map center!', location)
        this.setState({
            mapCenter: location
        })
    }

    autoComplete = () => {
        const autocomplete = new google.maps.places.Autocomplete(document.getElementById('locationInput'))
        autocomplete.setFields(['geometry'])
        const infowindow = new google.maps.InfoWindow()
        autocomplete.addListener('place_changed', () => {
            console.log('place changed!!!')
            infowindow.close()
            const placeObj = autocomplete.getPlace()
            if (placeObj.geometry) {
                const placeGoogle = placeObj.geometry.location
                const place = {
                    lat: placeGoogle.lat(),
                    lng: placeGoogle.lng()
                }
                console.log('place', place)
                this.setMapCenter(place)
            }
        })
    }


    render() {
        return (
            <Fragment>
				<Row>
					<Col size="three columns offset-by-five" colId="centerCol">
						<Input type='text' id='locationInput' placeholder='Enter your location'/>
					</Col>
				</Row>
				<Row>
				<Col size="twelve columns">
					<GoogleMap
						center={this.state.mapCenter}
						points={this.state.points}
					/>
				</Col>
				</Row>
            </Fragment>
        )
    }
}
export default GoogleMapContainer