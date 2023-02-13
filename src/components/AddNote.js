import React, {useContext, useState} from "react"
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
	const context = useContext(noteContext)
	const {addNewNote, editSingleNote} = context

	const [note, setNote] = useState({title: "", description: "", tag: ""})

	const handleClick = (e) => {
		e.preventDefault()
		addNewNote(note.title, note.description, note.tag)

		//setNote({title: "", description: "", tag: ""})
	}
	const handleOnChange = (e) => {
		setNote({...note, [e.target.name]: e.target.value})
	}

	return (
		<div>
			<div className='container my-3'>
				<h2>Add a Note</h2>
				<div className='mb-3 '>
					<label htmlFor='title' className='col-sm-2 col-form-label'>
						Title
					</label>
					<div className='col-sm-10'>
						<input
							type='text'
							className='form-control'
							id='title'
							name='title'
							onChange={handleOnChange}
							value={note.title}
						/>
					</div>
				</div>
				<div className='mb-3 '>
					<label htmlFor='description' className='col-sm-2 col-form-label'>
						Description
					</label>
					<div className='col-sm-10'>
						<textarea
							className='form-control'
							id='description'
							name='description'
							row='7'
							onChange={handleOnChange}
							value={note.description}
						></textarea>
					</div>
				</div>
				<div className='mb-3 '>
					<label htmlFor='tag' className='col-sm-2 col-form-label'>
						Tag
					</label>
					<div className='col-sm-10'>
						<input
							type='text'
							className='form-control'
							id='tag'
							name='tag'
							onChange={handleOnChange}
							value={note.tag}
						/>
					</div>
				</div>
				<button
					type='button'
					className={`btn btn-primary ${
						note.title.length < 3 || note.description.length < 3
							? "disabled"
							: ""
					}`}
					onClick={handleClick}
				>
					Add Note
				</button>
			</div>
		</div>
	)
}

export default AddNote
