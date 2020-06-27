import React, { Component } from 'react';
import axios from "axios";
import View from "./View";

class SearchBar extends Component {
    constructor(props) {
        super(props);

    this.state = { 
        breeds: [],
        selectedBreed: ""
     }
    }

    componentDidMount() {
        this.getDogBreeds();
    }

    // getDogBreeds = () => {
    //     axios.get("/api/breeds")
    //     .then(res => {
    //         this.setState({breeds: res.data});
    //         console.log(this.breeds);
    //     })
    //     .catch(err => console.log(err))
    // }

    getDogBreeds() {
        axios.get("/api/breeds")
        .then( res => {
            let dogsApi = res.data.map((dog => {
                return {value: dog, display: dog}
            }));
            this.setState({
                breeds: dogsApi,
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() { 
        console.log(this.state.breeds);

        return ( 
            <div className="flex-div">
                <select value={this.state.selectedBreed}
                onChange={(e) => this.setState({selectedBreed: e.target.value})}>
        {this.state.breeds.map((dogs) => <option key={dogs.value} value={dogs.value}>{dogs.display}</option>)}
                </select>
            </div>
         );
    }
}
 
export default SearchBar;