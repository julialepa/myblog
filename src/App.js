import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/home";
import Post from "./components/post/post";
import Modal from "./components/usermodal/modal";
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      loader: false
    };
    // this.dataFetch();
  }

  componentDidMount() {
    this.setState({ loader: true });
    this.dataFetch();
    this.setState({ loader: false });
  }

  dataFetch() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json =>
        this.setState({
          post: json
        })
      );
  }

  render() {
    const {loader, post} = this.state
    return (
      <div>
        <Home />
        {loader ? (
          <p>'...loading'</p>
        ) : (
          <div className="carousel-container">
            <div className="feed-page">
              {post.map(item => (
                <div>
                  <Post title={item.title} body={item.body} />
                  <hr className="list-divider"/>
                </div>
              ))}
            </div>
          </div>
        )}
        <Footer/>
      </div>
    );
  }
}

export default App;
