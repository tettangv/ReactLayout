import React from "react";
import { Button } from "reactstrap";

class Login extends React.Component {
  render() {
    console.log("Login");
    return (
      <div>
        <hi>Login Page</hi>
        <Button outline color="primary" onClick={this.props.changeRole(0)}>
          Login
        </Button>
      </div>
    );
  }
}

export default Login;
