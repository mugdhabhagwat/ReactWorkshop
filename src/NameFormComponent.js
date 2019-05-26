import React, {Component, Fragment} from 'react';

export default class NameFormComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleSubmit(event){
        console.log("A name was submitted : " + this.state.value);
        //we can call API and submit data here
        // or else get data based on input
        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }

    render(){
        return(
        <Fragment>
            <p>Currently my value is {this.state.value}</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:<input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" />
            </form>
        </Fragment>
        )
    }
}