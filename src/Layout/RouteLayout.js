import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import HomeLayout from "../HomeLayout";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const RouteLayout = ({ component: Component, role: Role, ...rest }) => {
  console.log("RouteLayout");
  //todo: logic for validate user

  return (
    <div>
      <Component {...Component} />
    </div>
  );
};

export default RouteLayout;
