import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class LinkComponent extends Component{
    componentDidMount(){
        console.log("LinkComponent mount");
    }
    render(){
        const urlStyle = {
            color: this.props.urlColor,
            fontWeight:700
        };
        return(
            <a style={urlStyle} href={this.props.apiUrl}>{this.props.urlName}</a>
        )
    }
}

LinkComponent.propTypes = {
    apiUrl: PropTypes.string,
    urlName: PropTypes.string,
    urlColor: PropTypes.string    
}