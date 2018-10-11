import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";


class Article extends Component {
  state = {
    articles: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
          <Col size="twelve columns">
            <MapTemp/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Article;
