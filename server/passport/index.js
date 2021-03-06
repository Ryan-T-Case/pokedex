const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require('../db/models/User');

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
});

passport.deserializeUser((id, done) => {
	console.log('Deserialize ... called')
	User.findOne(
		{ _id: id },
		'local.username gender starter partyPokemon pcPokemon',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
});

//Register Strategies
passport.use(LocalStrategy);

module.exports = passport;