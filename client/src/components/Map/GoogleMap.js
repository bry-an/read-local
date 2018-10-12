import React, { Component } from "react";
import './GoogleMap.css'
import mapStyle from './GoogleMapStyle.js'


const google = window.google

class GoogleMap extends Component {

    componentDidMount() {
        this.initMap(this.props.center, this.props.points, 4)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.center !== this.props.center)
        this.initMap(nextProps.center, nextProps.points, 6)
    }


    initMap = (center, points, zoom) => {

        const styledMapType = new google.maps.StyledMapType(mapStyle, {name: 'ReadLocal Map'})
        const map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom,
            center,
            mapTypeControlOptions: {
                mapTypeIds: []
            }
        })
        map.mapTypes.set('styled_map', styledMapType)
        map.setMapTypeId('styled_map')

        const heatmap = new google.maps.visualization.HeatmapLayer({
            data: points,
            map
        })

        heatmap.setMap(heatmap.getMap()
            ? null
            : map
        )
        console.log('center', this.props.center)



    }

    //createLatLng expects an array of objects containing lat and long properties
    //with their corresponding numerical values, e.g. [{ lat: 10, lng: 10 }]
    //It returns an array of those values converted to google LatLng objects, 
    //which can be passed to the data property of the HeatmapLayer constructor.
    createLatLng = pointsArr => {
        pointsArr.map(point => new google.maps.LatLng(point.lat, point.lng))
    }


    render() {
        return (
            <div id='googleMap'>
            </div>
        )
    }

}

export default GoogleMap