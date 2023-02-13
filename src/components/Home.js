import AddNote from "./AddNote"
import Notes from "./Notes"
import React, {useEffect} from "react"
import {useNavigate} from "react-router-dom"

const Home = () => {
	const navigate = useNavigate()

	useEffect(() => {
		console.log("From home token: " + localStorage.getItem("token"))
		if (
			localStorage.getItem("token") === null ||
			localStorage.getItem("token") === "undefined"
		) {
			navigate("/login")
		}
	}, [])

	return (
		<div>
			<AddNote></AddNote>

			<div className='container'>
				<Notes></Notes>
			</div>
		</div>
	)
}

export default Home
