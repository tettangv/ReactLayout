import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HomeLayout = ({ children, ...rest }) => {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }

export default HomeLayout;