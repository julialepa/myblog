import React, { Component } from 'react';
import './home.css'
import Modal from '../usermodal/modal'
import Searchbar from './searchbar'


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="sidebar">
            <Modal   id={5} />
            <div className="logo-nav">FLAMINGO</div>
        </div>
      );

    };
  }

export default Home;



