import React, {useContext, useState} from "react"
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
	const context = useContext(noteContext)
	const {addNewNote, editSingleNote} = context

	const [note, setNote] = useState({title: "", description: "", tag: "default"})

	const handleClick = (e) => {
		e.preventDefault()
		addNewNote(note.title, note.description, note.tag)
		//showAlert("success", "Note added succesfully!")
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
						/>
					</div>
				</div>
				<button
					type='button'
					className={`btn btn-primary ${
						note.title && note.description ? "" : "disabled"
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
