//Application Server Dependencies
const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes");

//Setting up express server
const app = express();
const PORT = process.env.PORT || 3001;

//Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Allow server to handle routes
//app.use(routes);

//Establish connection to the MongoDB Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pokedex", { useNewUrlParser: true });

//Start up the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });