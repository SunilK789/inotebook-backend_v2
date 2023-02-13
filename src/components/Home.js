import AddNote from "./AddNote"
import Notes from "./Notes"
import React, {useEffect} from "react"
import {useNavigate} from "react-router-dom"
//import noteContext from "../context/notes/noteContext"

const Home = () => {
	const navigate = useNavigate()

	// const context = useContext(noteContext)
	// const {notes, getNotes} = context

	useEffect(() => {
		//console.log("From home token: " + localStorage.getItem("token"))
		if (
			localStorage.getItem("token") === null ||
			localStorage.getItem("token") === "undefined"
		) {
			console.log("From home token: " + localStorage.getItem("token"))
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
