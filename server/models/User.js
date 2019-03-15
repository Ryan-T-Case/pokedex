const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    starter: { type: String, required: true }
});

// bcrypt middleware to handle password hashing

//This hashes the password
UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// This validates the hashed password
UserSchema.methods.validPassword = (password, storedPW) => {
    return bcrypt.compareSync(password, storedPW);
};

module.exports = mongoose.model("User", UserSchema);
