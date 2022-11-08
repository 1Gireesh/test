const express = require("express");
const cors = require("cors");
const productRouter = require("./product/product.routes");
const app = express();

app.use(cors());
app.use(express.json());



app.use("/products",productRouter)


app.get("/",(req,res)=>{
    res.json({"boo":"osao"})
})

app.listen(8000,()=>{
    console.log("http://localhost:8000/");
})

