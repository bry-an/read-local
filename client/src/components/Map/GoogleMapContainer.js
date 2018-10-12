import React, { Fragment, Component } from 'react'
import GoogleMap from './GoogleMap'

const google = window.google
class GoogleMapContainer extends Component {


    state = {
        mapCenter: { lat: 39.755, lng: -104.99 },
        points: []
    }

    componentDidMount () {
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
                <input type='text' id='locationInput' placeholder='Enter your location'></input>
                <GoogleMap
                    center={this.state.mapCenter}
                    points={this.state.points}
                />
            </Fragment>
        )
    }
}
export default GoogleMapContainer