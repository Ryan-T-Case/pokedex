//Load environmental variables
// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

//Application Server Dependencies
const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes");
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our connection to the mongo database
const passport = require('./passport')

//Setting up express server
const app = express();
const PORT = process.env.PORT || 8080;

//Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

//Passport Setup
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser


//If its a production environment
if (process.env.NODE_ENV === "production") {
    //Serve static files
    app.use(express.static("client/build"));
}

//Allow server to handle routes
//app.use(routes);

//Error Handler
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

//Start up the server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });