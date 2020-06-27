const axios = require("axios");



module.exports = {
    getBreeds: (req, res) => {

        const dogBreeds = [];

        axios.get("https://dog.ceo/api/breeds/list/all")
        .then(response => {
            // console.log(response)
            let object = response.data.message;
            // console.log(object)
            for (let key in object) {
                if (object[key].length !== 0) {
                  for (let i = 0; i < object[key].length; i++) {
                    dogBreeds.push(object[key][i] + " " + key);
                  }
                } else {
                  dogBreeds.push(key);
                }
              }
            // console.log(dogBreeds);
            res.status(200).send(dogBreeds);
        })
        .catch(err => res.status(500).send(err));
    }
}
