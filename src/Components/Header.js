import React from "react";
import { Link } from "react-router-dom";
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
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      // <div>
      //     <div>
      //         Header
      //     </div>
      //     <div>
      //         <ul>
      //             <li>
      //                 <Link to="/home">Home</Link>
      //             </li>
      //             <li>
      //                 <Link to="/page1">Page1</Link>
      //             </li>
      //             <li>
      //                 <Link to="/page2">Page2</Link>
      //             </li>
      //             <li>
      //                 <Link to="/">logout</Link>
      //             </li>
      //         </ul>
      //     </div>
      // </div>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#/">home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/page1">Page1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/page2">Page2</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* <Route path="/login" component={Login}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route path="/admin" component={Admins}></Route>
        <Route exact path="/aboutus" component={AboutUs}></Route> */}
      </div>
    );
  }
}

export default Header;
