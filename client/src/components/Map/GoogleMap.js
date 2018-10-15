import React, { Component } from "react";
import './GoogleMap.css'
import mapStyle from './GoogleMapStyle.js'
import coords from './newCoordsArray'
import API from '../../utils/API'

const google = window.google

class GoogleMap extends Component {

    state = {
        points: [],
    }

    componentDidMount() {
        this.initMap(4, this.props.center, this.state.points)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.center !== this.props.center) {
            this.initMap(6, this.props.center, this.props.points)
        }
    }

    getArticlesLatLng = () => {
        console.log('getting articles lat lng')
        API.fillArticles()
            .then(x => x.data)
            .then(x => this.getLatLng(x))
            .then(x => {
                this.setState({
                    points: x
                })
            })
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

        console.log('points', points)
        if (points.length > 0) {
            const heatmap = new google.maps.visualization.HeatmapLayer({
                data: this.createLatLng(points),
                map
            })
            heatmap.setMap(map)
        }
    }
    getLatLng = responseArray => {
        const array = responseArray.map(article => {
            return (
                {
                    lat: parseFloat(article.lat),
                    lng: parseFloat(article.lng)
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