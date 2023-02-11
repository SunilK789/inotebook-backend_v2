const express = require("express")
const router = express.Router()
const User = require("../models/User")
const {body, validationResult} = require("express-validator")
const bcrypt = require("bcrypt")
var jwt = require("jsonwebtoken")

const JWT_SECRET = "SunilIsTheBest"
//Create a use using: POST "/api/auth/createuser". no login required
router.post(
	"/createuser",
	[
		body("email", "Enter a valid email").isEmail(),
		body("name", "Enter a valid name").isLength({min: 3}),
		body("password", "Password must be atleast 5 character").isLength({min: 5}),
	],
	async (req, res) => {
		//If there are errors return bad request
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()})
		}

		//check wheather the user exist with same email id
		try {
			let user = await User.findOne({email: req.body.email})
			if (user) {
				return res
					.status(400)
					.json({error: "a user with same email id already exist"})
			}

			const salt = await bcrypt.genSalt(10)
			const secPass = await bcrypt.hash(req.body.password, salt)

			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				password: secPass,
			})

			const data = {
				user: {
					id: user.id,
				},
			}
			const authToken = jwt.sign(data, JWT_SECRET)
			console.log(authToken)

			res.json({authToken})
		} catch (error) {
			console.error(error.message)
			res.status(500).send("Some error occured!")
		}
	}
)

module.exports = router
