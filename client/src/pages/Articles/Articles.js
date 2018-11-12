import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import "./Articles.css";


class Articles extends Component {
  state = {
    articles: [],
    city: this.props.match.params.city,
    cityCheck: this.props.match.params
  };

  componentDidMount() {
    console.log("getting articles");
    this.getArticles();
  }

  updateState(city){
    
  }

  componentDidUpdate(prevProps){
    console.log(this.state.cityCheck.city)
    console.log(prevProps.location.pathname)
    console.log(this.props.match.params.city)
    if(this.state.city!==this.props.match.params.city){
      console.log("fuck yeah")
      this.setState({city: this.props.match.params.city})
      this.getArticles();
    }
    
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
	    API.pullArticles({headers: {'x-access-token': token}}, this.state.city)
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
                   <Row>
                     <Col size="twelve columns">
				            	<a href={article.url} target="_blank" rel="noopener" rel="noreferrer">
                      <strong>
                        {article.title}
                      </strong>
                    </a>
                    </Col>
                    </Row>
                    <Row>
                      <Col size="nine columns">
					          <div className="articleBodyTrunc u-cf" id={"articleId-" + article.publishedAt}>
                    {article.description}
                    </div>
                    </Col>
                    <Col size="three columns">
                    <img src={article.urlToImage} className="articleImage" alt={article.title}/>
                    </Col>
                    </Row>
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
