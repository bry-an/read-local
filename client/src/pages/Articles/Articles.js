import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";


class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    API.getArticles()
      .then(res =>  {this.setState({articles: res.data.articles});}
	)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="twelve columns">
			{this.state.articles.length ? (
				  <List>
					{this.state.articles.map((article, i) => {
					  return (
						<ListItem key={article.url}>
						  <a href={"/articles/" + article.url}>
							<strong>
							  {article.title} by {article.author}
							</strong>
						  </a>
						</ListItem>
					  );
					})}
				  </List>
				) : ""}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
