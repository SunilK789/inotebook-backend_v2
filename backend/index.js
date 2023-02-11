const connectToMongo = require("./db")
const express = require("express")

connectToMongo()

const app = express()
const port = 5000

app.use(express.json())

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
	res.send("hello Sunil")
})

app.use("/api/auth", require("./routes/auth"))
app.use("/api/note", require("./routes/note"))

app.listen(port, () => {
	console.log(`Example app liteling at http://localhost:${port}`)
})
