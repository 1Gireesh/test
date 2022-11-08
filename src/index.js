const express = require("express");
const cors = require("cors");
const port = 8080;
const userRouter = require("./users/user.routes");
const productRouter = require("./products/product.routes");
const cartRouter = require("./cart/cart.routes");
const connect = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users",userRouter);
app.use("/products",productRouter);
app.use("/carts",cartRouter);

app.listen(port,async ()=>{
    await connect();
    console.log(`http://localhost:${port}/`);
})