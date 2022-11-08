const express = require("express");

const app = express.Router();

app.get("/",(req,res)=>{
    res.send("jai shivaji jai bhavani ");
})

module.exports = app;