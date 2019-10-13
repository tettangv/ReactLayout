import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import PageNotFound from "./Components/PageNotFound";

import RouteLayout from "./Layout/RouteLayout";

import "./App.css";

class App extends Component {
  state = {
    role: 1
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Route exact path="/">
              <Redirect to="/login" />
            </Route> */}
            <Route path="/login" component={Login} />
            <RouteLayout exact path="/" component={Home} />
            <RouteLayout path="/page1" component={Page1} />
            <RouteLayout path="/page2" component={Page2} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
