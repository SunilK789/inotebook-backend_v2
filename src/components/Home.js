import AddNote from "./AddNote"
import Notes from "./Notes"
import React from "react"
import EditModal from "./EditModal"

const Home = () => {
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
