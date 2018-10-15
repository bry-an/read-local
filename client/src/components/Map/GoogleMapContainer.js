import React, { Fragment, Component } from 'react'
import GoogleMap from './GoogleMap'
import { Input } from "../Form"
import { Col, Row } from "../Grid";
import API from '../../utils/API'

const google = window.google
class GoogleMapContainer extends Component {


    state = {
        mapCenter: { lat: 39.755, lng: -96.99 },
        points: [],
        articleHeadlines: [],
        articleBodies: [],
        keywordInput: ''
    }

    componentDidMount() {
        this.autoComplete()
        this.getArticlesLatLng()
        this.getHeadlines()
        this.getBody()
    }

    setMapCenter = location => {
        this.setState({
            mapCenter: location
        })
    }

    inputHandler = event => {
        const { name, value } = event.target
        console.log('userInput', event)
        this.setState({
            [name]: value.trim()
        }, () => this.filterHeadlines(value.trim()))
    }

    getArticlesLatLng = () => {
        API.fillArticles()
            .then(x => x.data)
            .then(x => this.getLatLng(x))
            .then(x => this.createLatLng(x))
            .then(x => {
                this.setState({
                    points: x
                })
            })
    }

    getHeadlines = () => {
        API.fillArticles()
            .then(x => x.data)
            .then(x =>
                this.setState({
                    articleHeadlines: x.map(item => item.title)
                }))
    }
    getBody = () => {
        API.fillArticles()
            .then(x => x.data)
            .then(x =>
                this.setState({
                    articleBodies: x.map(item => item.body)
                }))
    }
    filterHeadlines = filter => {
        const filteredHeadlines = this.state.articleBodies.filter(article => article.includes(filter))
        console.log('filterbodies', filteredHeadlines)
        // this.setState({
        //     articleHeadlines: allHeadlines.filter()
        // })
    }

    getLatLng = responseArray => {
        const array = responseArray.map(article => {
            return (
                {
                    lat: parseFloat(article.lat),
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
    autoComplete = () => {
        const autocomplete = new google.maps.places.Autocomplete(document.getElementById('locationInput'))
        autocomplete.setFields(['geometry'])
        const infowindow = new google.maps.InfoWindow()
        autocomplete.addListener('place_changed', () => {
            infowindow.close()
            const placeObj = autocomplete.getPlace()
            if (placeObj.geometry) {
                const placeGoogle = placeObj.geometry.location
                const place = {
                    lat: placeGoogle.lat(),
                    lng: placeGoogle.lng()
                }
                this.setMapCenter(place)
            }
        })
    }


    render() {
        return (
            <Fragment>
                <Row>
                    <Col size="three columns offset-by-five" colId="centerCol">
                        <Input type='text' id='locationInput' placeholder='Enter your location' />
                    </Col>
                    <Col size='three columns' colId='keywordInputCol'>
                        <Input type='text' value={this.state.keywordInput} name='keywordInput' onChange={this.inputHandler} placeholder='Keyword Search'></Input>

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