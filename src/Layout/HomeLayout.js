import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const HomeLayout = ({ children, ...rest }) => {
  return <div>{children}</div>;
};

export default HomeLayout;
