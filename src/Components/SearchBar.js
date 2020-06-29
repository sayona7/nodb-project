import React, { Component } from 'react';
import axios from "axios";
import View from "./View";
import MyFavs from "./MyFavs";

class SearchBar extends Component {
    constructor(props) {
        super(props);

    this.state = { 
        breeds: [],
        selectedBreed: "",
        dogLink: "",
        favDogs: [],
        currentDogData: []
     }

     this.handleAdd = this.handleAdd.bind(this);
     this.removeFav = this.removeFav.bind(this);
    }

    componentDidMount() {
        this.getDogBreeds();
    }

    getDogBreeds() {
        axios.get("/api/breeds")
        .then( res => {
            this.setState({
                breeds: res.data[0]
            })
            // console.log(this.state.breeds)
        }).catch(error => {
            console.log(error);
        });
    }

    getDogImg(id) {
        // console.log(id)
        axios.get(`/api/breed-img/${id}`)
        .then( res => {
            console.log(res.data);
            this.setState({dogLink: res.data})
        })
        .catch(error => {
            console.log(error);
        })
        // console.log(this.state.dogLink)
    }

    getDogData(dogObj) {
        console.log(dogObj);
        let currentData = dogObj;
        this.setState({
            currentDogData: currentData
        })
    
    }


    onChangeHandler(e) {
        this.setState({selectedBreed: e.target.value});
        let currentDog = e.target.value;
        console.log(currentDog);
        let storage = [];

        for (let i = 0; i < this.state.breeds.length; i++) {
            if (currentDog === this.state.breeds[i].name) {
                this.getDogImg(this.state.breeds[i].id);
                for (let key in this.state.breeds[i]) {
                storage.push(this.state.breeds[i][key]);
                }
                storage.splice(0, 3);
                this.getDogData(storage);
            }
        }
        
    }

    handleAdd() {
        let newFavorites = this.state.favDogs
        newFavorites.push(
                {
                    name: this.state.selectedBreed,
                    imgURL: this.state.dogLink,
                    dogData: this.state.currentDogData
                }  
        )

        this.setState({favDogs: newFavorites});
    }

    removeFav(dogName) {
        let updatedFavs = this.state.favDogs;
        
        updatedFavs.pop();

        this.setState({favDogs: updatedFavs})
        // console.log("function fired")
    }


    render() { 
        // console.log(this.state.selectedBreed);
        console.log(this.state.favDogs);
        return ( 
            <div>
                <div className="flex-div">
                    <select 
                        className="select-list"
                        value={this.state.selectedBreed}
                        onChange={(e) => this.onChangeHandler(e)}>
                        <option>Select your favorite breed</option>
                        {this.state.breeds.map((dog) => <option key={dog.id} value={dog.name}>{dog.name}</option>)}
                    </select>
                </div>
                <div className="flex-div">
                    <button 
                    onClick={e => this.handleAdd()}
                    className="img-btn"
                    >Add to Favs</button>
                </div>
                 <div>
                    <View 
                    selectedBreed={this.state.selectedBreed}
                    imgURL={this.state.dogLink}
                    dogData={this.state.currentDogData}
                    />
                    < MyFavs 
                    // dogInfo={this.props.dogInfo}
                    // refreshDog={this.getDogBreeds}
                    // refreshImg={this.getDogImg}
                    favDogs={this.state.favDogs}
                    removeFav={this.removeFav}
                    />
                </div>
            </div>
         );
    }
}
 
export default SearchBar;