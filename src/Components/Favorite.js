import React from 'react';

const Favorite = (props) => {

    

    return  <div className="fav-dog">
                <p className="fav-p">{props.name}</p>
                <div className="flex-div">
                    <button className="img-btn"
                    onClick={() => props.removeFav(props.name)}
                    >Remove</button>
                    <button className="img-btn">Edit</button>
                </div>
                <img className="fav-dog-img" src={props.imgURL} alt={props.imgURL} />
                <table className="table">
                    <tbody className="fav-tbody">
                        <tr>
                            <th>Dog info</th>
                        </tr>
                        {props.dogData.map((value, i) => <tr key={i}><td>{value}</td></tr>)}
                    </tbody>
                </table>
            </div>
}

export default Favorite;