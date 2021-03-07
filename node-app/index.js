//importation de Express
const express = require("express");
var app = express();

//CORS
var cors = require("cors");
app.use(cors());

//importation de body-parser
const bodyParser = require("body-parser");

//importation du module de cnx à une DB
const db = require("./config/database");

app.listen(4000, function () {
  console.log("Running on http://127.0.0.1:4000");
});

app.set("secretKey", "nodeRestApi"); // jwt secret token

//importation des routers
const userRouter = require("./routers/userRouter");
const categoryRouter = require("./routers/categoryRouter");
const customerRouter = require("./routers/customerRouter");
const orderRouter = require("./routers/orderRouter");
const productRouter = require("./routers/productRouter");
const providerRouter = require("./routers/providerRouter");
const subCategoryRouter = require("./routers/subCategoryRouter");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/subcategory", subCategoryRouter);
app.use("/customer", customerRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/provider", providerRouter);

app.get("/home", function (req, res) {
  res.send("Hello home!");
});

app.post("/about", function (req, res) {
  res.send("GOT a POST request");
});
