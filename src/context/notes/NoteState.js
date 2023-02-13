import React, {useState} from "react"
import NoteContext from "./noteContext"

//const initialNotes = []

const host = "http://localhost:5000"

const NoteState = (props) => {
	const [notes, setNotes] = useState(null)
	const [alerts, setAlerts] = useState({message: "", type: ""})
	const [token, setToken] = useState("")
	const [userData, setUserData] = useState(null)

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
	const getUser = async () => {
		const response = await fetch(`${host}/api/auth/getuser`, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
		})
		const json = await response.json() // parses JSON response into native JavaScript objects
		console.log("From getUser token: " + localStorage.getItem("token"))
		console.log("From getUser data: " + json)
		setUserData(json)
	}

	//Get all notes
	const getNotes = async () => {
		console.log("NoteState -> getNotes befor api call: " + notes)
		const response = await fetch(`${host}/api/note/getallnotes`, {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
		})
		const json = await response.json() // parses JSON response into native JavaScript objects

		setNotes(json)
		console.log("NoteState -> getNotes: " + notes)
	}

	//Add a Note
	const addNewNote = async (title, description, tag) => {
		//TODO : add API call
		const response = await fetch(`${host}/api/note/addnote`, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
			body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
		})

		const newNote = await response.json()

		setNotes(notes.concat(newNote))
		showAlert("Note added!", "success")
	}

	//Delete a Note
	///api/note/deletenote/63e748c671a0b79d000b5e11
	const deleteNote = async (id) => {
		const response = await fetch(`${host}/api/note/deletenote/${id}`, {
			method: "DELETE", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
			//body: JSON.stringify(id), // body data type must match "Content-Type" header
		})

		console.log(response.json)
		const allNotes = await JSON.parse(JSON.stringify(notes))
		const notesAfterDelete = allNotes.filter((note) => note._id !== id)
		setNotes(notesAfterDelete)
		showAlert("Note deleted!", "success")
	}

	//Edit a Note
	const editNote = async (id, title, description, tag) => {
		///api/note/updatenote/63e748b371a0b79d000b5e0d
		const response = await fetch(`${host}/api/note/updatenote/${id}`, {
			method: "PUT", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
			//body: JSON.stringify(note.title, note.description, note.tag), // body data type must match "Content-Type" header
			body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
		})
		console.log(response.json)
		const newNotes = await JSON.parse(JSON.stringify(notes))

		for (let index = 0; index < newNotes.length; index++) {
			const element = newNotes[index]
			if (element._id === id) {
				newNotes[index].title = title
				newNotes[index].description = description
				newNotes[index].tag = tag
			}
			break
		}

		setNotes(newNotes)
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
				setToken,
				token,
				showAlert,
				getUser,
				userData,
				setUserData,
			}}
		>
			{props.children}
		</NoteContext.Provider>
	)
}

export default NoteState
