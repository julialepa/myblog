import React, { Component } from 'react';
import './home.css'

class Home extends Component {
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
      <div className={this.state.isOpen ? "sidebar" : "sidebar closed"} onClick={this.toggle}>
        <div className="container">
          <div className="user one"></div>
          <p>Julia Lepa</p>
            <input className="my-input" type="text" placeholder="Cerca..."  />
        </div>
        </div>
        );
      }
    }
    
    export default Home;
