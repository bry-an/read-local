import React from 'react'

const google = window.google

const AutoComplete = props => {

    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('locationInput'))
    console.log('locationinput', document.getElementById('locationInput'))
    autocomplete.setFields(['geometry'])
    const infowindow = new google.maps.InfoWindow()
    autocomplete.addListener('place_changed', () => {
        infowindow.close()
        const placeObj = autocomplete.getPlace()
        const place = placeObj.geometry.location
        props.setMapCenter(place)
    })

    return null

}

export default AutoComplete
