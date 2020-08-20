//Require
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

// Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Needed for express app
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs( { defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers-controller.js");
app.use(routes);


// Starts the server to listen on PORT
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
  


