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
    API.fillArticles()
      .then(res => { this.setState({ articles: res.data }); }
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
                  const url = article.url.split("/").pop().split(".").shift();
                  return (
                    <ListItem key={url} >
                      <a href={"/articles/" + url} id={"id-" + url}>
                        <strong>
                          {article.title} <span className="author">by {article.author}</span>
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
