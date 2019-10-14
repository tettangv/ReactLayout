import React from "react";
import { Route, Redirect } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const RouteLayout = ({ component: Component, role, ...rest }) => {
  console.log("RouteLayout");

  return (
    <div>
      <Route
        {...rest}
        render={matchProps => (
          <HomeLayout {...matchProps}>
            <Component {...matchProps} />
          </HomeLayout>
        )}
      />
    </div>
  );
};

export default RouteLayout;
