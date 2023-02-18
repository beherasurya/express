
// const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();
app.set("view engine" ,"ejs");
app.set("views" , "views");



app.use(bodyParser.urlencoded({extended :true}));

app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoute.routes);
app.use(shopRoute);

app.use(errorController.get404);

app.listen(30001, ()=>{
    console.log("Server Started");
});
