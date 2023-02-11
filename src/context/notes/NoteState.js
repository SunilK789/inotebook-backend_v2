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
		_id: "63e74f97b9c7395dcf6be4b4",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
	{
		_id: "63e748c671a0b79d000b5e13",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
	{
		_id: "63e74f97b9c7395dcf6be4b4",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
	{
		_id: "63e748c671a0b79d000b5e13",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
	{
		_id: "63e74f97b9c7395dcf6be4b4",
		user: "63e72ba6c9fa169624315420",
		title: "My first note",
		description: "I have to creat a new react app",
		tag: "Family",
		__v: 0,
	},
]

const NoteState = (props) => {
	const [notes, setNotes] = useState(initialNotes)
	return (
		<NoteContext.Provider value={{notes, setNotes}}>
			{props.children}
		</NoteContext.Provider>
	)
}

export default NoteState
