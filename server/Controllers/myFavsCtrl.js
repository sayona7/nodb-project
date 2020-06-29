const myFavDogs = [];
let id = 1;

module.exports = {
    getMyFavDogs: (req, res) => {
        res.status(200).send(myFavDogs);
    },
    takeFavBreed: (req, res) => {
        const {dogInfo} = req.body;

        dogInfo.id = id;
        id++;

        myFavDogs.push(dogInfo);
        res.status(200).send(dogInfo);
    },
}