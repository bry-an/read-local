import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";

const App = () => (
  <Router>
    <div>
		<Navbar >
			Think National, Read Local
		</Navbar>
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
	  <Footer>
    &copy;2018 GABY
	  </Footer>
    </div>
  </Router>
);

export default App;
