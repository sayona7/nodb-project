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
        favDogs: []
     }

     this.handleAdd = this.handleAdd.bind(this);
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
            console.log(this.state.breeds)
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
        console.log(this.state.dogLink)
    }

    onChangeHandler(e) {
        this.setState({selectedBreed: e.target.value});
        this.getDogImg(e.target.options.selectedIndex);
        console.log(e.target.options.selectedIndex);
    }

    handleAdd() {
        let newFavorites = this.state.favDogs
        newFavorites.push(
                {
                    name: this.state.selectedBreed,
                    imgURL: this.state.dogLink
                }  
        )

        this.setState({favDogs: newFavorites});
    }


    render() { 
        // console.log(this.state.selectedBreed);
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
                    />
                    < MyFavs 
                    // dogInfo={this.props.dogInfo}
                    // refreshDog={this.getDogBreeds}
                    // refreshImg={this.getDogImg}
                    favDogs={this.state.favDogs}
                    />
                </div>
            </div>
         );
    }
}
 
export default SearchBar;