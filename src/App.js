import React, { Component } from 'react';
import Header from "./Components/Header"
// import View from "./Components/View";
import SearchBar from './Components/SearchBar';
// import DogInfo from "./Components/DogInfo";
import './App.css';
import axios from "axios";
import "./Fonts/Sketch-3D.woff"
// import MyFavs from './Components/MyFavs';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogInfo: []
    }

    this.passDogInfo = this.passDogInfo.bind(this);

  }

  componentDidMount() {
    axios.get("/api/fav-breeds")
    .then(res => {
      this.setState({dogInfo: res.data})
    })
    .catch(err => console.log(err));
  }

  passDogInfo(dog) {
    axios.post("/api/fav-breeds", {dog})
    .then( res => {
      this.setState({dogInfo: res.data})
    })
    .catch(err => console.log(err));
  }


  render() { 
    return ( 
      <div>
        <Header />
        <SearchBar 
        passInfo={this.passDogInfo}/>
        {/* <MyFavs 
        dogInfo={this.state.dogInfo}/> */}
        {/* <View /> */}
        {/* <DogInfo /> */}
      </div>
     );
  }
}
 
export default App;

