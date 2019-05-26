import React, {Component, Fragment, lazy, Suspense} from 'react';
import './SideBarComponent.css';
import './api.js';
import LinkComponent from './LinkComponent';
import NameFormComponent from './NameFormComponent';
// const NameFormComponent = lazy(() => import('./NameFormComponent'));

/*class SideBarComponent extends Component{
    render(){
        console.log("props====");
        console.log(this.props);
        let propsURL = `${this.props.apiUrl}${this.props.urlName}`;
        let githubUser=`vinitkumar`;
        const API_URL=`https://api.github.com/${githubUser}/`;
        return(
            <Fragment>
                <p>Important Links</p>
                <ul>
                    <li><a href="http://anit.github.io/">Anit's Website</a></li>
                    <li><a href="https://twitter.com/iamsrk">SRK's Twitter</a></li>
                    <li><a href={API_URL}>Vinit's Github</a></li>
                    <li><a href={propsURL}>SRK Props URL</a></li>
                </ul>                
            </Fragment>
        )};
    }
*/

class SideBarComponent extends Component{
    componentDidMount(){
        console.log("SideBarComponent mount");
    }
    render(){
        console.log("props====");
        console.log(this.props.urlList.length);
        let linkContainer=[];
        if(this.props.urlList)//OR this.props.urlList.length>0
        { 
            this.props.urlList.forEach((value, key) => {
                linkContainer.push(<li key={key}><LinkComponent urlColor={value.urlColor} apiUrl={value.apiUrl} urlName={value.urlName}></LinkComponent></li>);
            });
        }
        return(
            <Fragment>
                <p>Important Links</p>
                <ul>
                    {linkContainer}
                </ul>
                {/* <Suspense fallback={<div>Loading.....</div>}>
                    <NameFormComponent/>
                </Suspense>           */}
                <NameFormComponent/>
            </Fragment>
        )};
}

export default SideBarComponent;