import React, { Component } from 'react';
import './post.css'

class Post extends Component {

    render() {
        return (
            <div>
                <div className="post">
                <h5>{this.props.post.title}</h5>
                <p>{this.props.post.body}</p>
                </div>
            </div>
        );
    }
}

export default Post;


