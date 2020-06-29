import React, { Component } from 'react';

const Favorite = (props) => {

    return  <div className="fav-dog">
                <p className="fav-p">{props.name}</p>
                <img className="fav-dog-img" src={props.imgURL} alt={props.imgURL} />
            </div>
}

export default Favorite;