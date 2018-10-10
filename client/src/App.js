import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import FootNav from "./components/FootNav";
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
	  <FootNav>
      Something neat here
	  </FootNav>
    </div>
  </Router>
);

export default App;
