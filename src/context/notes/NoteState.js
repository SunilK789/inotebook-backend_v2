import React, {useState} from "react"
import NoteContext from "./noteContext"

const initialNotes = []

const host = "http://localhost:5000"

const NoteState = (props) => {
	const note = {
		id: "",
		title: "",
		description: "",
		tag: "",
	}

	const [notes, setNotes] = useState(initialNotes)
	const [alerts, setAlerts] = useState({message: "", type: ""})
	const [editSingleNote, setEditSingleNote] = useState(note)

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

	//Get all notes
	const getNotes = async () => {
		const response = await fetch(`${host}/api/note/getallnotes`, {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzJiYTZjOWZhMTY5NjI0MzE1NDIwIn0sImlhdCI6MTY3NjA5ODEwMX0.BZ4KgJsgw4TQrBBerlgBF46RTFqMcX9frEix1UOnocM",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			//body: JSON.stringify(data), // body data type must match "Content-Type" header
		})
		const json = await response.json() // parses JSON response into native JavaScript objects

		setNotes(json)
	}

	//Add a Note
	const addNewNote = async (title, description, tag) => {
		//TODO : add API call
		const response = await fetch(`${host}/api/note/addnote`, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzJiYTZjOWZhMTY5NjI0MzE1NDIwIn0sImlhdCI6MTY3NjA5ODEwMX0.BZ4KgJsgw4TQrBBerlgBF46RTFqMcX9frEix1UOnocM",
			},
			body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
		})

		//Get latest notes from backend
		getNotes()
		console.log("Adde note for the id")

		// setNotes(notes.concat(note))
		// showAlert("success", "Note added succesfully!")
	}

	//Delete a Note
	///api/note/deletenote/63e748c671a0b79d000b5e11
	const deleteNote = async (id) => {
		const response = await fetch(`${host}/api/note/deletenote/${id}`, {
			method: "DELETE", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzJiYTZjOWZhMTY5NjI0MzE1NDIwIn0sImlhdCI6MTY3NjA5ODEwMX0.BZ4KgJsgw4TQrBBerlgBF46RTFqMcX9frEix1UOnocM",
			},
			//body: JSON.stringify(id), // body data type must match "Content-Type" header
		})

		//Get latest notes from backend
		getNotes()
		console.log("Deleting note for the id: " + id)
	}

	//Edit a Note
	const editNote = async (id, title, description, tag) => {
		///api/note/updatenote/63e748b371a0b79d000b5e0d
		const response = await fetch(`${host}/api/note/updatenote/${id}`, {
			method: "PUT", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzJiYTZjOWZhMTY5NjI0MzE1NDIwIn0sImlhdCI6MTY3NjA5ODEwMX0.BZ4KgJsgw4TQrBBerlgBF46RTFqMcX9frEix1UOnocM",
			},
			//body: JSON.stringify(note.title, note.description, note.tag), // body data type must match "Content-Type" header
			body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
		})
		//console.log(response)
		getNotes()

		console.log("From noteState:" + note.title, note.description, note.tag)
	}

	return (
		<NoteContext.Provider
			value={{
				notes,
				addNewNote,
				editNote,
				deleteNote,
				alerts,
				getNotes,
				setEditSingleNote,
			}}
		>
			{props.children}
		</NoteContext.Provider>
	)
}

export default NoteState
