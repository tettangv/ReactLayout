import React from "react";
import { Button } from "reactstrap";

class Calculator extends React.Component {
  click = events => {
    const data = {
      role: events.target.value,
      point: 3
    };
    this.props.changeRole(data);
  };
  render() {
    console.log("Page1");
    return (
      <div>
        <p>Calculator Wizard</p>
        <Button outline color="primary" value="2" onClick={this.click}>
          Login
        </Button>
      </div>
    );
  }
}

export default Calculator;
