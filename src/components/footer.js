import React, { Component } from "react";
import { Collapse, Nav, NavItem, NavbarToggler, Navbar } from 'reactstrap'
import './footer.css'


class Footer extends Component {

  render() {
    return (
        <div>
        <Navbar light expand="md">
            <NavbarToggler/>
                <Nav className="right-bar ml-auto footer-container" navbar>
                    <NavItem>
                        <a className="my-a">company</a>
                    </NavItem>
                    <NavItem>
                        <a className="my-a">news</a>
                    </NavItem>
                    <NavItem>
                        <a className="my-a">contacts</a>
                    </NavItem>
                    <NavItem>
                        <i className="fab fa-facebook-square my-icon"></i>
                    </NavItem>
                    <NavItem>
                        <i className="fab fa-instagram my-icon"></i>
                    </NavItem>
                    <NavItem>
                        <i className="fab fa-twitter-square my-icon"></i>
                    </NavItem>
                </Nav>
        </Navbar>
    </div>
);
  }
}

export default Footer;
