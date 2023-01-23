const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: String,
	punchline: String,
    createdAt: String,
    updatedAt: String
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;