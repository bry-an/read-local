import React, { Component } from "react";
import API from "../../utils/API";
import Sidebar from "../../components/Sidebar";
import { MapTemp } from  "../../components/MapTemp";
import { Col, Row, Container } from "../../components/Grid";


class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
    // Deletes a book from the database with a given id, then reloads books from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };
    
	// Deletes a book from the database with a given id, then reloads books from the db
  saveArticle = id => {
    API.saveArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
	let startYear = this.state.startYear;
	let endYear = this.state.endYear;
	if (startYear) {
		const startYearArr = startYear.split("/");
		startYear = startYearArr[2] + "-" + startYearArr[0] + "-" + startYearArr[1];
	}
	if (endYear) {
		const endYearArr = endYear.split("/");
		endYear = endYearArr[2] + "-" + endYearArr[0] + "-" + endYearArr[1];
	}
    if (this.state.topic) {
      API.getArticles({
        topic: this.state.topic,
        startYear: startYear,
        endYear: endYear
      })
        .then(res => this.setState({articles: res.data.articles}))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="four columns">
            <Sidebar>
              <p>Test data</p>
              <p>Test data</p>
              <p>Test data</p>
              <p>Test data</p>
            </Sidebar>
          </Col>
          <Col size="eight columns">
            <MapTemp/>
          </Col>
        </Row>
				
      </Container>
    );
  }
}

export default Articles;
