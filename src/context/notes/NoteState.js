import React, {useState} from "react"
import NoteContext from "./noteContext"

const initialNotes = [
	{
		_id: "63e748c671a0b79d000b5e13",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
	{
		_id: "63e74f97b9c7395dffcf6be4b4",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
	{
		_id: "63e748c671a0bdssf79d000b5e13",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
	{
		_id: "63e74f97b9c7dsfd395dcf6be4b4",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
	{
		_id: "63e748c671asdsa0b79d000b5e13",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
	{
		_id: "63e74f97b9csada7395dcf6be4b4",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
]

const NoteState = (props) => {
	const [notes, setNotes] = useState(initialNotes)
	const [alerts, setAlerts] = useState({message: "", type: ""})

	const showAlert = (message, type) => {
		console.log("inside showAlert")
		setAlerts({
			message: message,
			type: type,
		})
		setTimeout(() => {
			setAlerts({message: "", type: ""})
		}, 2000)
	}

	//Add a Note
	const addNewNote = (title, description, tag) => {
		const note = {
			_id: "63e74f97b9c7dfsfshgfhff6be4b4",
			user: "63e72ba6c9fa169624315420",
			title: title,
			description: description,
			tag: tag,
			__v: 0,
		}

		setNotes(notes.concat(note))
		showAlert("success", "Note added succesfully!")
	}

	//Delete a Note
	const deleteNote = (id) => {}

	//Edit a Note
	const editNote = (tid) => {}

	return (
		<NoteContext.Provider
			value={{notes, addNewNote, editNote, deleteNote, alerts}}
		>
			{props.children}
		</NoteContext.Provider>
	)
}

export default NoteState
