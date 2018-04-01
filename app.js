// Importing modules
const express =     require("express");
const bodyParser =  require("body-parser");

// Initializing Express web-server
var app = express();

// Sets the view engine
app.set("view engine", "ejs");

// Application configuration
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.render("landing");
});



// Setting up the port to listen for requests
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
