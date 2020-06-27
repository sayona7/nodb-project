// Author: Veronica Bakanowicz
// File Name: indexedDB.js
// Purpose: Main Node.js file for NoDB PromiseRejectionEvent.

const express = require("express");
// here add your controller requires
const dogCtrl = require("./Controllers/dogListCtrl");

const app = express();

app.use(express.json());

// Endpoint for dogListCtrl
app.get("/api/breeds", dogCtrl.getBreeds);


// add endpoints here


app.listen(5000, () => console.log("Server is sound on 5000"));