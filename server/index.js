// Author: Veronica Bakanowicz
// File Name: indexedDB.js
// Purpose: Main Node.js file for NoDB PromiseRejectionEvent.

const express = require("express");
// here add your controller requires
const dogCtrl = require("./Controllers/dogListCtrl");
const dogImg = require("./Controllers/dogImgCtrl")
const myFavs = require("./Controllers/myFavsCtrl");

const app = express();

app.use(express.json());

// Endpoint for dogListCtrl
app.get("/api/breeds", dogCtrl.getBreeds);

// Endpoint for dogImgCtrl
app.get("/api/breed-img/:id", dogImg.getDogImg);

// Endpoints for myFavsCtrl
app.get("/api/fav-breeds", myFavs.getMyFavDogs);
app.post("api/fav-breeds", myFavs.takeFavBreed);


app.listen(5000, () => console.log("Server is sound on 5000"));