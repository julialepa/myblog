import React, { Component } from 'react';
import './searchbar.css'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="right-bar">
                <a className="my-a">company</a>
                <a className="my-a">news</a>
                <a className="my-a">contacts</a>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter-square"></i>
            </div>
        );

    };
}

export default Home;