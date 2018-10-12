import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";

const App = () => (
  <Router>

    <Fragment>
		<Route path="/" component={Navbar} />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/articles" component={Articles} />
		</Switch>
	  <Footer>
    &copy;2018 GABY

	  </Footer>
    </Fragment>
  </Router>
);

export default App;
