import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Map from "./components/Map";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Footer>
        &copy;2018 GABY
	  </Footer>
    </div>
  </Router>
);

export default App;
