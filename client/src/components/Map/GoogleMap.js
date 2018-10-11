import React, { Component } from "react";
import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDqEyqqpMD23rErtt__7gxgYsuA6pfYdOE&libraries=visualization&callback=initMap'



class GoogleMap extends Component {
    state = {
        center: { lat: 38.755, lng: -98.434 },
        points: []
    }

    initMap = () => {
        map = new google.maps.Map(document.querySelector('mapDiv'), {
            zoom: 5,
            center: this.state.center
        })

        heatmap = new google.maps.visualization.HeatmapLayer({
            data: this.state.points,
            map
        })

    }

    createLatLng = twoPointsArr => {
        return new google.maps.LatLng(twoPointsArr[0], twoPointsArr[1])
    }


}