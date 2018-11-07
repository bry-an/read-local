import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import NewUser from "./pages/NewUser";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";

const App = () => (
  <Router>

    <Fragment>
		<Navbar/>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/articles" component={Articles} />
			<Route path="/newuser" component={NewUser} />
		</Switch>
	  <Footer>
    	&copy;2018 GABY
	  </Footer>
    </Fragment>
  </Router>
);

export default App;
