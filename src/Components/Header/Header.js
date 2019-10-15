import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "../../public/assets/css/Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.isOpen = false;

    console.log("Header: " + this.props.role);
    this.state = {
      role: this.props.role
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidUpdate = () => {
    if (this.state.role != this.props.role) {
      this.setState({ role: this.props.role });
    }
  };

  render() {
    return (
      <div>
        <Navbar color="dark" inverse expand="md">
          <NavbarBrand href="/">
            <img
              src="../assets/images/merlin2.png"
              alt=""
              width="200"
              height="70"
            />
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* {this.state.role > 0 ? ( */}
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#/login" onClick={this.toggle}>
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/cal" onClick={this.toggle}>
                  Calculator
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle}>change</NavLink>
              </NavItem>
              {this.state.role == 2 ? (
                <NavItem>
                  <NavLink href="#/admin" onClick={this.toggle}>
                    Admin
                  </NavLink>
                </NavItem>
              ) : null}
              <NavItem>
                <NavLink href="#/" onClick={this.toggle}>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
            {/* ) : null} */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
