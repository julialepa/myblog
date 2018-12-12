import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home'
import Post from './components/post/post'
import Modal from './components/usermodal/modal'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      post: [],
    }
    this.dataFetch();
  }


  dataFetch() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({
        post: json
      })
      )
  }



  render() {
    return (
      <div>
        <Home />
        <div className="carousel-container">
        </div>
        <div className="feed-page">
          {this.state.post.map(post => <Post title={post.title} body={post.body} />)}
        </div>
      </div>
    );
  }
}

export default App;