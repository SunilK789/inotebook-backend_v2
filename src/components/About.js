import noteContext from "../context/notes/noteContext"
import React from "react"
import {useContext} from "react"

function About() {
	const a = useContext(noteContext)
	return (
		<div>
			This is about {a.name} and his age is {a.age}
		</div>
	)
}

export default About
