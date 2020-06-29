import React, { Component } from 'react';
import Favorite from "./Favorite";


class MyFavs extends Component {

     // handleChange = () => {
    //     const {dog} = this.props
    //     this.props.dogInfo();
    //     this.props.refreshDog();
    //     this.props.refreshImg();
    // }

    render() { 
        // console.log(this.props.favDogs)
        const favDogs = this.props.favDogs.map((dog, i) => {
        return <Favorite 
            key={i}
            name={dog.name}
            imgURL={dog.imgURL}
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