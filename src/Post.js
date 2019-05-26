import React, {Component} from 'react';
import './Post.css';

export default class Post extends Component{
    render(){
        return(
            <ul className="postContainer" key={this.props.key}>
                <li>ID : {this.props.data.userId}</li>
                <li>User ID : {this.props.data.title}</li>
                <li>Body : {this.props.data.body}</li>
            </ul>
        )
    }
}