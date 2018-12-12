import React, { Component } from 'react';
import './post.css'


class Post extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="post-container">
                <div className="post">
                <h5 className="post-title">{this.props.title}</h5>
                <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}

export default Post;

