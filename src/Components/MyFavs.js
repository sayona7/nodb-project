import React, { Component } from 'react';
import Favorite from "./Favorite";


class MyFavs extends Component {

    render() { 
        // console.log(this.props.favDogs)
        const favDogs = this.props.favDogs.map((dog, i) => {
        return <Favorite 
            key={i}
            name={dog.name}
            imgURL={dog.imgURL}
            dogData={dog.dogData}
            removeFav={this.props.removeFav}
            />
        }
        )

        return (  
            <div>
                <div className="flex-div">
                    <h1 className="favs-h1">My Favorites</h1>
                </div>
                <div className="fav-div">
                    {favDogs}
                </div>
            </div>
        );
    }
}
 
export default MyFavs;