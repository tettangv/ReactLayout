import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  render() {
    const bgFooter = {
      backgroundColor: "lightblue",
      fontColor: "white",
      fontWeight: "Bold",
      height: "2.5rem",
      fontFamily: "serif, san-serif"

      // fontWeight
    };

    const element = "Hello world";
    // return <div style={bgFooter}>{element}</div>;
    return <div className="footer_text">{element}</div>;
  }
}

export default Footer;
