import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
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
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1 style= {{ fontSize: "3em"}}>World News Article Scrubber</h1>
			  <h2>Search for and annotate articles of interest</h2>
            </Jumbotron>
			<Card>
				<Cardheader>
					Search
				</Cardheader>
				<form>
					<Label>
					Topic
					</Label>
				  <Input
					value={this.state.topic}
					onChange={this.handleInputChange}
					name="topic"
					placeholder="Topic (required)"
				  />
				  <Label>
					Start Date (last 30 days)
					</Label>
				  <Input
					value={this.state.startYear}
					onChange={this.handleInputChange}
					name="startYear"
					placeholder="ex. 2016"
					type="date"
				  />
				  <Label>
					End Date
					</Label>
				  <Input
					value={this.state.endYear}
					onChange={this.handleInputChange}
					name="endYear"
					placeholder="ex. 2018"
					type="date"
				  />
				  <FormBtn
					disabled={!(this.state.topic)}
					onClick={this.handleFormSubmit}
				  >
					Search
				  </FormBtn>
				</form>
			</Card>
			<Card>
				<Cardheader>
					Results
				</Cardheader>
				{this.state.articles.length ? (
				  <List>
					{this.state.articles.map(article => (
					  <ListItem key={article.url}>
						<Link to={"/articles/" + article._id}>
						  <strong>
							{article.title}
						  </strong>
						</Link>
					  </ListItem>
					))}
				  </List>
				) : (
				  <h3>No Results to Display</h3>
				)}
			</Card>
            <Card>
				<Cardheader>
					Saved Articles
				</Cardheader>
				{this.state.articles.length ? (
				  <List>
					{this.state.articles.map(article => {
					  return (
						<ListItem key={article._id}>
						  <a href={"/articles/" + article._id}>
							<strong>
							  {article.title} by {article.author}
							</strong>
						  </a>
						  <SaveBtn onClick={() => this.saveArticle(article._id)} />
						  <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
						</ListItem>
					  );
					})}
				  </List>
				) : (
				  <h3>No Saved Articles</h3>
				)}
			</Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
