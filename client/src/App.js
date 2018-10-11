import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";
import Modal from "./components/Modal"

const App = () => (
  <Router>
    <div>
		<Route path="/" component={Navbar} />
    <Route exact path="/" component={Home} />
    <Route exact path="/articles" component={Articles} />
	  <Footer>
    &copy;2018 GABY
	  </Footer>
    <Modal/>
    </div>
  </Router>
);

export default App;
