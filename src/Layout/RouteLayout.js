import React from "react";
import { Route, Redirect } from "react-router-dom";
import HomeLayout from "./HomeLayout";

const RouteLayout = ({ component: Component, ...rest }) => {
  console.log("RouteLayout");
  //todo: logic for validate user

  return (
<<<<<<< Updated upstream
    <Route
      {...rest}
      render={matchProps => (
        <HomeLayout>
          <Component {...matchProps} />
        </HomeLayout>
      )}
    />
=======
    <Route {...rest} render={matchProps => (
      <HomeLayout>
        <Component {...Component} />
      </HomeLayout>


    
>>>>>>> Stashed changes
  );
};

export default RouteLayout;
