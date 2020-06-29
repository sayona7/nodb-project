import React from 'react';

const View = props => {
    // console.log(props);

    return (
            <div className="dog-div">
                <img className="dog-view" src={props.imgURL === "" ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e38f3775-a82b-477f-a56f-2c5ccfc231cc/dctp750-c9158d1b-ac00-4ef9-b46a-e10661e0c128.jpg/v1/fill/w_400,h_298,q_75,strp/angry_husky_meme_by_wjones215_dctp750-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yOTgiLCJwYXRoIjoiXC9mXC9lMzhmMzc3NS1hODJiLTQ3N2YtYTU2Zi0yYzVjY2ZjMjMxY2NcL2RjdHA3NTAtYzkxNThkMWItYWMwMC00ZWY5LWI0NmEtZTEwNjYxZTBjMTI4LmpwZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LbVM5DPRZjtDTQh-ZGIH-z9aE7azwWO1VlofvsJdqMI" : props.imgURL} alt={props.imgURL}></img>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Dog info</th>
                        </tr>
                        {props.dogData.map((value, i) => <tr key={i}><td>{value}</td></tr>)}
                    </tbody>
                </table>
            </div>
    )
}

export default View;