import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    console.log("HOME: " + this.props.item);
    this.state = {
      getItem: this.props.item
    };
  }
  render() {
    console.log(this.state.getItem);
    return (
      <div>
        Welcome Home Page
        <img
          src="https://react-bootstrap.github.io/logo.svg"
          //   src="../img/logo.png"
          width="100"
          height="20"
          className="d-inline-block align-top"
        />
      </div>
    );
  }
}

export default Home;
