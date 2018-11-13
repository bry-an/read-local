import React, { Fragment, Component } from 'react'
import { Link } from "react-router-dom";
import GoogleMap from './GoogleMap'
import { Input } from "../Form"
import { Col, Row } from "../Grid";
import API from '../../utils/API'
import geocoder from 'geocoder'
import axios from 'axios'
import { parseString } from 'xml2js'




const google = window.google
class GoogleMapContainer extends Component {


    state = {
        mapCenter: { lat: 39.755, lng: -96.99 },
        points: [],
        articles: [],
        filteredArticles: [],
        filtered: false,
        keywordInput: '',
        cityLink: ''
    }

    componentDidMount() {
        this.autoComplete()
        this.getArticles()
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

    reverseGeocoder = (lat, lng) => {
        geocoder.reverseGeocode(lat, lng, (err, data) => {
            if (err) console.log(err)
            console.log('compound code', typeof (data.plus_code.compound_code))
            const compoundCode = data.plus_code.compound_code.split(",")[0].split(" ").slice(1).join(" ")
            console.log(compoundCode)
            // const article = `https://cors-anywhere.herokuapp.com/https://news.google.com/news/rss/local/section/geo/${compoundCode}?ned=us&gl=US&hl=en&num=30`
            this.setState({ cityLink: compoundCode });
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window,
                0, 0, 0, 0, 0, false, false, false, false, 0, null);
            var a = document.getElementById("cityLink");
            a.dispatchEvent(evt); 

            // const article = `/articles/${compoundCode}`
            // axios.get(article)
            //     .then(x => parseString(x.data, (err, res) => {
            //         if (err) console.log(err)
            //         console.log('json?', res)

            //     })
            //     )
        }, { key: "AIzaSyDqEyqqpMD23rErtt__7gxgYsuA6pfYdOE" })

    }



    getArticlesLatLng = () => {
        const lats = this.getLatLng(this.state.filteredArticles)
        this.setState({
            points: this.createLatLng(lats)
        })
    }
    getArticles = () => {
        API.getArticles()
            .then(x => {
                this.setState({
                    articles: x.data,
                    filteredArticles: x.data
                }, () => this.getArticlesLatLng())
            })
    }

    filterHeadlines = filter => {
        this.setState({
            filtered: true
        })
        let filteredArticles = this.state.articles.filter(article => article.body.toLowerCase().includes(filter.toLowerCase()))
        if (!this.state.keywordInput)
            filteredArticles = this.state.articles
        this.setState({
            filteredArticles: filteredArticles
        }, () => this.getArticlesLatLng())
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
                    <Col size="five columns offset-by-one">
                        <p>To search by specific location, enter it below</p>
                        <Input type='text' id='locationInput' placeholder='Enter your location' />
                    </Col>
                    <Col size="five columns">
                        <p className='keywordLabel'>To narrow results, enter keyword below</p>
                        <Input type='text' id='keywordInput' name='keywordInput' value={this.state.keywordInput} onChange={this.inputHandler} placeholder='Keyword Search' />
                    </Col>
                </Row>
                <Row>
                    <Col size="twelve columns">
                        <GoogleMap
                            center={this.state.mapCenter}
                            points={this.state.points}
                            geocoder={this.reverseGeocoder}
                        />
                        <Link to={`/articles/${this.state.cityLink}`} id="cityLink"></Link>
                    </Col>
                </Row>
                {/* <Row>
                    {this.state.filtered
                        ? this.state.articles.map(article =>
                            <ArticleItem articleHeadline={article.title} />
                        )
                        : null
                    }</Row> */}

            </Fragment>
        )
    }
}
export default GoogleMapContainer