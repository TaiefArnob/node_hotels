const express = require("express");
const app = express();
const db = require("./db");
const MenuItem = require("./models/Menu");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT=process.env.PORT||3000;

app.get("/", function (req, res) {
  res.send("Welcome To My Hotel! How can I help You?");
});

//Import the router files

const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuRoutes=require('./routes/menuRoutes')
app.use('/menu',menuRoutes)


app.listen(PORT, () => {
  console.log("Server is listening on port:3000");
});
