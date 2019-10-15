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
import RouteLayout from "./Layout/RouteLayout";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  state = {
    role: 0,
    point: 0
  };

  changeRole = data => {
    this.setState({ role: data.role, point: data.point });
  };

  render() {
    return (
      <div className="mainpage">
        <section>
          <Header role={this.state.role} point={this.state.role} />
        </section>
        <section id="body" className="bodypage">
          <div className="middlebox centered_element">
            {/* Authen */}
            <Router>
              <Switch>
                {/* <Route exact path="/"><Redirect to="/login" /> </Route> */}
                <Route path="/login" component={Login} />
                <RouteLayout
                  exact
                  path="/"
                  component={() => <Home role={this.state.role} item="test" />}
                />
                <RouteLayout
                  path="/cal"
                  component={() => (
                    <Calculator
                      changeRole={this.changeRole}
                      role={this.state.role}
                    />
                  )}
                />
                <RouteLayout
                  path="/admin"
                  component={() => <Admin userRole={this.state.role} />}
                />
                <Route component={PageNotFound} />
              </Switch>
            </Router>
          </div>
        </section>
        {/* End Authen */}
        {/*  else */}
        <section>
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
