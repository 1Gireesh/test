const express = require("express");
const product = require("./product.model");

const app = express.Router();

app.get("/", (req, res) => product.find().then((r) => {
    console.log(r);
    res.send(r);
}));

product.find().then((r)=>console.log(r)).catch(e=>console.log(e));

module.exports = app;