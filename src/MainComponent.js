import React,{Component, Fragment} from 'react';
import getData from './api';
import PostListComponent from './PostListComponent'

class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            postData: []
        };
    }

    componentDidMount(){
        let postData = getData('https://jsonplaceholder.typicode.com/posts');
        postData.then((posts) => {
            this.setState({
                loading: false,
                postData: posts
            });
        });
        console.log(this.state);
    }

    render(){
        console.log(this.state);
        return(
           <Fragment>
               { this.state.loading && <p>Loading ...</p> }
               { !this.state.loading && <PostListComponent  posts={this.state.postData} /> }
           </Fragment>
        )};
}

export default MainComponent;