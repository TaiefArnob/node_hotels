const express = require("express");
const app = express();
const db = require("./db");
const MenuItem = require("./models/Menu");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome To My Hotel! How can I help You?");
});

//Import the router files

const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuRoutes=require('./routes/menuRoutes')
app.use('/menu',menuRoutes)

app.listen(3000, () => {
  console.log("Server is listening on port:3000");
});
