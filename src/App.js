import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Calculator from "./Components/Calculator";
import Admin from "./Components/Admin";
import PageNotFound from "./Components/PageNotFound";
import RouteLayout from "./Layout/RouteLayout/RouteLayout";
import "./Layout/RouteLayout/RouteLayout.css";
import "./App.css";
import Header from "./Components/Header";

class App extends Component {
  state = {
    role: 0,
    point: 0
  };

  changeRole = data => {
    console.log("data:" + data);
    this.setState({ role: data.role, point: data.point });
    console.log("Role :" + data.role);
  };

  render() {
    console.log("App Role :" + this.state.role);
    return (
      <div className="App">
        <div className="menu">
          <Header role={this.state.role} point={this.state.role} />
        </div>
        {/* Authen */}
        <Router>
          <Switch>
            {/* <Route exact path="/"><Redirect to="/login" /> </Route> */}
            <Route path="/login" component={Login} />
            <RouteLayout
              exact
              path="/"
              component={() => <Home role={this.state.role} item="test" />}
              // component={Home}
              // role={this.state.role}
            />
            <RouteLayout
              path="/cal"
              component={() => (
                <Calculator
                  changeRole={this.changeRole}
                  role={this.state.role}
                />
              )}
              // component={Calculator}
              // role={this.state.role}
            />
            <RouteLayout
              path="/admin"
              component={() => <Admin userRole={this.state.role} />}
              // component={Admin}
              // role={this.state.role}
            />

            <Route component={PageNotFound} />
          </Switch>
        </Router>
        {/* End Authen */}
        {/*  else */}
      </div>
    );
  }
}

export default App;
