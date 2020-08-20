//Require
var express = require("express");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");

// Express app
const app = express();
const PORT = process.env.PORT || 3060;

// Needed for express app
app.use(express.static(path.join(__dirname, "public")));

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", expressHandlebars( { defaultLayout: "main: "}));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers-controller.js");
app.use(routes);




// Starts the server to listen on PORT
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
  


