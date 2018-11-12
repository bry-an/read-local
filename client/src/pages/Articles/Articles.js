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
    console.log("getting articles");
    this.getArticles();
  }

    getToken = () => {
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return "";
    }
  }
  
  getArticles = () => {
	  const token = this.getToken();
	    API.pullArticles({headers: {'x-access-token': token}}, this.props.match.params.city)
      .then(res => {
        const collName = localStorage.getItem("email");
        console.log(res);
		this.setState({articles: res.data.articles})
		console.log(this.state.articles)
        API.fillArticles({ "coll": collName, "articles": res.data.articles });
      })
    .catch(err => console.log(err));
  }


  render() {
    return (
	<div className="zin">
      <Container>
        <Row>
          <Col size="twelve columns">
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map((article, i) => {
                  return (
                   <ListItem key={article.publishedAt} >
					<a href={article.url} target="_blank" rel="noopener" rel="noreferrer">
                      <strong>
                        {article.title}
                      </strong>
                    </a>
					<div className="articleBodyTrunc" id={"articleId-" + article.publishedAt}>
						{article.description}
                    </div>

                    <hr></hr>
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
