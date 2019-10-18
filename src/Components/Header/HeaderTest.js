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
  DropdownItem,
  nav
} from "bootstrap";
import $ from "jquery";

class HeaderTest extends Component {
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
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
          <a className="navbar-brand" href="#">
            <img
              src="../assets/images/merlin2.png"
              alt=""
              width="200"
              height="70"
            />
          </a>
          <button className="btn btn-success ml-auto mr-1">Always Show</button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-right">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Right Link 1
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Right Link 2
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderTest;
