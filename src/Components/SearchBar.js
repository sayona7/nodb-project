import React, { Component } from 'react';
import axios from "axios";
import View from "./View";

class SearchBar extends Component {
    constructor(props) {
        super(props);

    this.state = { 
        breeds: [],
        selectedBreed: "",
        dogLink: ""
     }
    }

    componentDidMount() {
        this.getDogBreeds();
    }

    getDogBreeds() {
        axios.get("/api/breeds")
        .then( res => {
            let dogsApi = res.data.map((dog => {
                return {value: dog, display: dog}
            }));
            this.setState({
                breeds: [{value: '', display: 'Select your favorite breed'}].concat(dogsApi)
            });
        }).catch(error => {
            console.log(error);
        });
    }

    getDogImg(dogName) {
        console.log("getDogImg", this.state.selectedBreed);
        axios.get(`/api/breed-img/${dogName}`)
        .then( res => {
            console.log(res);
            this.setState({dogLink: res.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    onChangeHandler(e) {
        this.setState({selectedBreed: e.target.value});
        this.getDogImg(e.target.value);
    }


    render() { 
        console.log(this.state.selectedBreed);
        return ( 
            <div>
                <div className="flex-div">
                    <select 
                        className="select-list"
                        value={this.state.selectedBreed}
                        onChange={(e) => this.onChangeHandler(e)}>
                        {this.state.breeds.map((dogs) => <option key={dogs.value} value={dogs.value}>{dogs.display}</option>)}
                    </select>
                </div>
                <div className="flex-div">
                    <img className="dog-view" src={this.state.dogLink === "" ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e38f3775-a82b-477f-a56f-2c5ccfc231cc/dctp750-c9158d1b-ac00-4ef9-b46a-e10661e0c128.jpg/v1/fill/w_400,h_298,q_75,strp/angry_husky_meme_by_wjones215_dctp750-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yOTgiLCJwYXRoIjoiXC9mXC9lMzhmMzc3NS1hODJiLTQ3N2YtYTU2Zi0yYzVjY2ZjMjMxY2NcL2RjdHA3NTAtYzkxNThkMWItYWMwMC00ZWY5LWI0NmEtZTEwNjYxZTBjMTI4LmpwZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LbVM5DPRZjtDTQh-ZGIH-z9aE7azwWO1VlofvsJdqMI" : this.state.dogLink} alt={this.state.dogLink}></img>
                </div>
                {/*  <div>
                    <View 
                    selectedBreed={this.state.selectedBreed}
                    imgURL={this.state.dogLink}
                    />
                </div> */}
            </div>
         );
    }
}
 
export default SearchBar;