const mongoose = require("mongoose")
const mongoUri = "mongodb://127.0.0.1:27017/inotebook"

//mongodb://127.0.0.1:27017

const connectToMongo = () => {
	mongoose.connect(mongoUri, () => {
		console.log("Connnected to mongo successfully!")
	})
}

module.exports = connectToMongo
