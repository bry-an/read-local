import React, { Component } from "react";
import './GoogleMap.css'


const google = window.google

class GoogleMap extends Component {


    state = {
        center: { lat: 38.755, lng: -98.434 },
        points: []
    }

    componentDidMount() {
        this.initMap()
        console.log('can you see this?', google)
    }

    initMap = () => {
        let map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 5,
            center: { lat: 38.755, lng: -95.434 },

        })

        let heatmap = new google.maps.visualization.HeatmapLayer({
            data: this.state.points,
            map
        })

        heatmap.setMap(heatmap.getMap()
            ? null
            : map
        )
        console.log('center', this.state.center)



    }

    createLatLng = twoPointsArr => {
        return new google.maps.LatLng(twoPointsArr[0], twoPointsArr[1])
    }

    render() {
        return (
            <div id='googleMap'>
            </div>
        )
    }

}

export default GoogleMap