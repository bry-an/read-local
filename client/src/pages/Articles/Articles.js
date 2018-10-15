import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import "./Articles.css";


class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    API.fillArticles()
      .then(res =>  {this.setState({ articles: res.data});
    console.log(res.data, this.state.articles[0])}
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
                    <ListItem key={article._id} >
                    <a href={"/articles/" + article._id} id={"id-" + article._id}>
                      <strong>
                        {article.title}
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
