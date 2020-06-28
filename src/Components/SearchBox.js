import React, { Component } from 'react';


const SearchBox = (props) => {

    return <div className="flex-div">
                <select 
                className="select-list"
                value=""
                onChange={(e) => props.getDogImg(e.target.value)}>
                
                {/* props.breeds.map((dog) => <option key={dog.value} value={dog.value}>{"dogs.display"}</option>) */}
                </select>
            </div>
}

export default SearchBox;