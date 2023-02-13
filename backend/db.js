const mongoose = require("mongoose")
const mongoUri = "mongodb://127.0.0.1:27017/inotebook"
//const mongoUri ="mongodb://inotebuk:RaaCPmG0ALxKjmSbUGBhVqaXywdYSOz0tImXRBXb1XKjFNBK973HuV4gXr7684J1OtPdbT3G1ydvACDbd5Ui1g==@inotebuk.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@inotebuk@"
//mongodb://inotebuk:RaaCPmG0ALxKjmSbUGBhVqaXywdYSOz0tImXRBXb1XKjFNBK973HuV4gXr7684J1OtPdbT3G1ydvACDbd5Ui1g==@inotebuk.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@inotebuk@

//mongodb://127.0.0.1:27017

const connectToMongo = () => {
	mongoose.connect(mongoUri, () => {
		console.log("Connnected to mongo successfully!")
	})
}

module.exports = connectToMongo
