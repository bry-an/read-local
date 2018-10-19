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

  getArticles = () => {
    API.fillArticles()
      .then(res =>  {this.setState({ articles: res.data});
      console.log(res)}
  )
    .catch(err => console.log(err));
  }

  showMore = (i) => {
    var itemId = "articleId-" + i;
    var moreId = "moreId-" + i;
    var x = document.getElementById(itemId);
    var y = document.getElementById(moreId);
    if (y.textContent === "more...") {
      y.innerHTML="less..";
      x.removeAttribute("class");
      x.setAttribute("class", "articleBodyLong")
    } else {
      y.innerHTML="more...";
      x.removeAttribute("class");
      x.setAttribute("class", "articleBodyTrunc")
    }  
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
                        {article.title.slice(1, -1)}
                      </strong>
                    </a>
                    <hr></hr>
                    <div className="articleBodyTrunc" id={"articleId-" + article._id}>{article.body.slice(1, -1).replace(/\\\"/g, "\"").split("\\n\\n").map((item, index)=>
                    <p className="articleText" key={item + index}>{item}</p>)}
                    </div>
                    <p className="more" id={"moreId-" + article._id} onClick={()=>this.showMore(article._id)}>more...</p>
                    <hr></hr>
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
