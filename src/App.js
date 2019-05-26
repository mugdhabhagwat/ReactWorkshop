import React, { Component } from 'react';
import './App.css';
import SideBarComponent from './SideBarComponent';
import MainComponent from './MainComponent';

class App extends Component {
  render() {
    let urlList = [
      {
        urlName: "Vinit",
        apiUrl: "https://vinitkumar.me",
        urlColor: "red"
      },
      {
        urlName: "Anit",
        apiUrl: "https://anit.github.io",
        urlColor: "green"
      },
      {
        urlName: "Apurva",
        apiUrl: "https://apurvadey.github.io",
        urlColor: "maroon"
      }
    ];
    //<SideBarComponent urlName="iamsrk" apiUrl="https://www.instagram.com/"></SideBarComponent>
    return (
      <div className="App">
      <div className="sidebar">
        <h1>sidebar</h1>
          <SideBarComponent urlList={urlList}></SideBarComponent>
      </div>
      <div className="main">
          <h1>main content</h1>
          <MainComponent></MainComponent>
        </div>
      </div>
    );
  }
}

export default App;
