import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home'
import Post from './components/post/post'
import Modal from './components/usermodal/modal'
import Carousel from './components/carousel/carousel'
import {
  CarouselItem,
  CarouselCaption
} from 'reactstrap';



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
    

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        <CarouselCaption className="text-danger" captionText={post.title} captionHeader={post.body} />
      </CarouselItem>
      );
    });


    return (
      <div>
        <Home />
        <div className="carousel-container">
          <Carousel />
        </div>
        <div className="feed-page">
          {this.state.post.map(post => <Post title={post.title} body={post.body} />)}
        </div>
      </div>
    );
  }
}

export default App;