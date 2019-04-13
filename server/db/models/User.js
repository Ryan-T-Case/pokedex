const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const UserSchema = new Schema({
	local: {
		username: { type: String, unique: false, required: true },
		password: { type: String, unique: false, required: true }
	},
    gender: { type: String, required: true },
    starter: { type: String, required: true },
    partyPokemon: [],
    pcPokemon: []
});

// bcrypt middleware to handle password hashing

// Define schema methods
UserSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
UserSchema.pre('save', function(next) {
	if (!this.local.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.local.password = this.hashPassword(this.local.password)
		next()
	}
});

module.exports = mongoose.model("User", UserSchema);
