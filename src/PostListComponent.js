import React, { Component, Fragment } from 'react';
import Post from './Post';

export default class PostListComponent extends Component{
    render(){
        let postContainerList = [];
        if(this.props.posts){
            this.props.posts.forEach((value, key) => {
                postContainerList.push(<Post key={key} data={value}/>);
            });
        }
        return(
            <Fragment>{postContainerList}</Fragment>
        )
    }
}