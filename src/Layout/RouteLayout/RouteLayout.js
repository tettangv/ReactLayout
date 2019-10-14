import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import HomeLayout from "../HomeLayout";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import "./RouteLayout.css";
// import { Container, Row, Col } from "react-bootstrap";

const RouteLayout = ({ component: Component, role: Role, ...rest }) => {
  // console.log("RouteLayout  Role: " + { ...Component });

  // console.log("Route Props:" + props.role);

  return (
    <div className="center">
      <div>
        <Component {...Component} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default RouteLayout;
