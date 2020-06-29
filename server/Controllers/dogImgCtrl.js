const axios = require("axios");


module.exports = {
    getDogImg: (req, res) => {

        let dogLink = "";
        // console.log(req.params);

        axios.get(`https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=${req.params.id}`)
        .then(response => {
            // console.log(response.data[0].url);
            dogLink += response.data[0].url;
            res.status(200).send(dogLink);
            // console.log(dogLink);
        })
        .catch(err => res.status(500).send(err));
    }
}
