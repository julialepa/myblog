import React, { Component } from 'react';
import './comment.css';


class Comment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <div className="comment">
            <h5>{this.props.comment.title}</h5>
            <p>{this.props.comment.body}</p>
            </div>
        </div>
        );
    }
}

export default Comment;