import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";



class Articles extends Component {
  state = {
    article: []
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    API.getArticle()
      .then(res =>  {this.setState({ article: res.data});}
  )
    .catch(err => console.log(err));
  }

  render() {
    return (
		<div className="zin">
      <Container>
        <Row>
          <Col size="twelve columns">
            {this.state.article.length ? (
              <List>
                {this.state.articles.map((article) => {
                  return (
                    <ListItem key={article._id} >
                      <strong>
                        {article.title}
                      </strong>
                  </ListItem>
                  );
                })}
              </List>
            ) : ""}
          </Col>
        </Row>
      </Container>
	  </div>
    );
  }
}

export default Articles;
