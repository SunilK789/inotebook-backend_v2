import React, {useContext, useEffect, useRef, useState} from "react"
import noteContext from "../context/notes/noteContext"
import NoteItem from "./NoteItem"

const Notes = (props) => {
	const context = useContext(noteContext)
	const {notes, getNotes, editNote, showAlert, getUser} = context

	const ref = useRef(null)
	const refClose = useRef(null)
	const [note, setNote] = useState({
		id: "",
		title: "",
		description: "",
		tag: "default",
	})

	const handleUpdateClick = (e) => {
		editNote(note.id, note.title, note.description, note.tag)
		showAlert("Note update!", "success")
		refClose.current.click()
	}
	const handleOnChange = (e) => {
		setNote({...note, [e.target.name]: e.target.value})
	}

	useEffect(() => {
		//getNotes()
		console.log("useEffet from Notes.js token: ")
		console.log(localStorage.getItem("token"))

		if (localStorage.getItem("token")) {
			console.log("From Note.js token: " + localStorage.getItem("token"))
			getUser()
			getNotes()
			console.log(
				"useEffet from Notes.js token after getNotes(): " +
					localStorage.getItem("token")
			)
		}
	}, [])

	const updateNote = (currentNote) => {
		ref.current.click()
		setNote({
			id: currentNote._id,
			title: currentNote.title,
			description: currentNote.description,
			tag: currentNote.tag,
		})
		// props.showAlert("Note update!", "success")
	}

	return (
		<>
			<div>
				<button
					type='button'
					className='btn btn-primary d-none'
					data-bs-toggle='modal'
					data-bs-target='#exampleModal'
					ref={ref}
				>
					Launch demo modal
				</button>

				<div
					className='modal fade'
					id='exampleModal'
					tabIndex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title' id='exampleModalLabel'>
									Edit Note
								</h5>

								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
								></button>
							</div>
							<div className='modal-body'>
								<div className='container my-3'>
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
										<label
											htmlFor='description'
											className='col-sm-2 col-form-label'
										>
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
								</div>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-bs-dismiss='modal'
									ref={refClose}
								>
									Close
								</button>
								<button
									type='button'
									className='btn btn-primary'
									onClick={handleUpdateClick}
									disabled={
										note.title.length < 3 || note.description.length < 3
									}
								>
									Update Note
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{notes && notes.length !== 0 && <h2>Your Notes:</h2>}
			<div className='row my-3'>
				{notes &&
					notes.map((note) => {
						return (
							<NoteItem
								key={note._id}
								updateNote={updateNote}
								note={note}
								showAlert={props.showAlert}
							/>
						)
					})}
			</div>
		</>
	)
}

export default Notes
