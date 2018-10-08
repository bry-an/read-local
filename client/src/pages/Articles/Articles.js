import React, { Component } from "react";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container, Label } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { FormBtn, Input } from "../../components/Form";
import { Card, Cardheader } from "../../components/Card";

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
          <Col size="two columns">
					</Col>
					<Col size="ten columns">
					</Col>
				</Row>
				
      </Container>
    );
  }
}

export default Articles;
