import React, { Component } from 'react';
import './searchbar.css'
import { Collapse, Nav, NavItem, NavbarToggler, Navbar } from 'reactstrap'

class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <div>
                <Navbar light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="right-bar ml-auto" navbar>
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
                    </Collapse>
                </Navbar>
            </div>
        );

    };
}

export default Home;