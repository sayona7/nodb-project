const axios = require("axios");



module.exports = {
    getBreeds: (req, res) => {

        const dogBreeds = [];

        axios.get("https://api.thedogapi.com/v1/breeds")
        .then(response => {

          dogBreeds.push(response.data);
            // console.log(dogBreeds);
            res.status(200).send(dogBreeds);
        })
        .catch(err => res.status(500).send(err));
    }
}


// console.log(response)
            // let object = response.data.message;
            // // console.log(object)
            // for (let key in object) {
            //     if (object[key].length !== 0) {
            //       for (let i = 0; i < object[key].length; i++) {
            //         // dogBreeds.push(object[key][i] + " " + key);
            //         dogBreeds.push(key + "-" + object[key][i]);
            //       }
            //     } else {
            //       dogBreeds.push(key);
            //     }
            //   }