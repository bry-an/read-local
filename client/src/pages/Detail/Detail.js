import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    article: {}
  };
  // When this component mounts, grab the article with the _id of this.props.match.params.id
  // e.g. localhost:3000/articles/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getArticle(this.props.match.params.id)
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="twelve columns">

              <h1>
                {this.state.article.title} by {this.state.article.author}
              </h1>

          </Col>
        </Row>
        <Row>
          <Col size="ten columns">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.article.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="one column">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
