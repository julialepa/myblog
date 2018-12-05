import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home'
import Post from './components/post/post'

const post = {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: [],
  }
  this.dataFetch()
}

dataFetch() {
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => this.setState({
        post: json
    }
    ))
}
  render() {
    return (
      <div>
        <Home />
        <div className="feed-page">
          <Post post={post} />
        </div>
      </div>
    );
  }
}

export default App;