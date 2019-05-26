import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class LinkComponent extends Component{
    constructor(props){
        super(props);
        this.gotClicked = this.gotClicked.bind(this);
        this.gotPointerMove = this.gotPointerMove.bind(this);
        this.state = {
            visited:false
        }
    }

    gotClicked(event){
        event.preventDefault();
        console.log("I am gotClicked EVENT");
        console.log(event);
        console.log(event.target);
        this.setState({
            visited:!this.state.visited
        })
    }

    gotPointerMove(event){
        event.preventDefault();
        console.log("I am gotPointerMove");
        console.log(event.nativeEvent);
        console.log(event.type);
    }

    componentDidMount(){
        console.log("LinkComponent mount");
    }
    render(){
        let visitedColor=this.state.visited ? 'yellow' :'cyan';
        const urlStyle = {
            color: this.props.urlColor,
            fontWeight:700,
            backgroundColor : visitedColor
        };
        return(
            <a onPointerMove={this.gotPointerMove} onClick={this.gotClicked} style={urlStyle} href={this.props.apiUrl}>{this.props.urlName}</a>
        )
    }
}

LinkComponent.propTypes = {
    apiUrl: PropTypes.string,
    urlName: PropTypes.string,
    urlColor: PropTypes.string    
}