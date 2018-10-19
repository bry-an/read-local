import React, { Component } from "react";
import './GoogleMap.css'
import mapStyle from './GoogleMapStyle.js'

const google = window.google

class GoogleMap extends Component {


    componentDidMount() {
        this.initMap(4, this.props.center, this.props.points)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.center !== this.props.center) {
            this.initMap(6, nextProps.center, this.props.points)
        }
        if (nextProps.points !== this.props.points) {
            this.initMap(4, this.props.center, nextProps.points)
        }
    }


    initMap = (zoom, center, points) => {

        const styledMapType = new google.maps.StyledMapType(mapStyle, { name: 'ReadLocal Map' })
        const map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom,
            center,
            mapTypeControlOptions: {
                mapTypeIds: []
            }
        })
        map.mapTypes.set('styled_map', styledMapType)
        map.setMapTypeId('styled_map')

        google.maps.event.addListener(
            map, 'click', (event) => {
                console.log(event)
                this.props.geocoder(event.latLng.lat(), event.latLng.lng())

            }
        )

        console.log('points', this.props.points)
        if (points.length > 0) {
            const heatmap = new google.maps.visualization.HeatmapLayer({
                data: points,
                map
            })
            heatmap.setMap(map)
        }
    }
    getLatLng = responseArray => {
        const array = responseArray.map(article => {
            return (
                {
                    lat: article.lat,
                    lng: (isNaN(article.lng)
                        ? article.lng.$numberDecimal : article.lng)
                }
            )
        })
        return array
    }

    //createLatLng expects an array of objects containing lat and long properties
    //with their corresponding numerical values, e.g. [{ lat: 10, lng: 10 }]
    //It returns an array of those values converted to google LatLng objects, 
    //which can be passed to the data property of the HeatmapLayer constructor.
    createLatLng = pointsArr => {
        const arr = pointsArr.map(point => new google.maps.LatLng(point.lat, point.lng))
        return arr
    }


    render() {
        return (
            <div id='googleMap'>
            </div>
        )
    }


}

export default GoogleMap