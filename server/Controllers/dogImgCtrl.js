const axios = require("axios");


module.exports = {
    getDogImg: (req, res) => {

        let dogLink = "";

        axios.get(`https://dog.ceo/api/breed/${req.params.id}/images/random`)
        .then(response => {
            dogLink += response.data.message;
            res.status(200).send(dogLink);
            console.log(dogLink);
            console.log("getting dog imgs");
        })
        .catch(err => res.status(500).send(err));
    }
}


// axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`)