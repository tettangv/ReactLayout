import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./Components/Login/Login";
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
    const ProtectedComponent = () => {
      if (this.state.role == 0) return <Redirect to="/login" />;
    };

    return (
      <div id="web">
        <Container>
          <Row>
            <Col lg={true} xs={12} sm={12}>
              <section id="header" className="justify-content-md-center">
                <Header role={this.state.role} point={this.state.role} />
              </section>
            </Col>
          </Row>
          <Row>
            <Col lg={true} xs={12} sm={12}>
              <section id="body" className="bodymainpage">
                <Row>
                  <Col
                    md={{ span: 10, offset: 1 }}
                    sm={{ span: 10, offset: 1 }}
                    xs={12}
                  >
                    <div className="bodycontent">
                      {/* Authen */}

                      <Router>
                        <Switch>
                          {/* <Redirect to="/login" /> */}
                          <Route path="/login" component={Login} />
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
                            component={() => (
                              <Admin userRole={this.state.role} />
                            )}
                          />

                          <RouteLayout
                            exat
                            path="/"
                            component={() => (
                              <Home role={this.state.role} item="test." />
                            )}
                          />

                          <Route component={PageNotFound} />
                        </Switch>
                      </Router>
                    </div>
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>
          <Row>
            <Col lg={true} xs={12} sm={12}>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
