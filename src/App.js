import React, { Component } from 'react';
import Header from "./Components/Header"
import View from "./Components/View";
import SearchBar from './Components/SearchBar';
import DogInfo from "./Components/DogInfo";
import './App.css';
import axios from "axios";
import "./Fonts/Sketch-3D.woff"


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogImgUrl: "",
      breeds: []
    }


  }


  render() { 
    return ( 
      <div>
        <Header />
        <SearchBar />
        <View />
        <DogInfo />
      </div>
     );
  }
}
 
export default App;

