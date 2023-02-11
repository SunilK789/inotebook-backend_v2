import React, {useContext} from "react"

import Notes from "./Notes"

function Home() {
	return (
		<div>
			<div className='container my-3'>
				<h2>Add a Note</h2>
				<div class='mb-3 '>
					<label for='staticEmail' class='col-sm-2 col-form-label'>
						Email
					</label>
					<div class='col-sm-10'>
						<input
							type='text'
							class='form-control'
							id='staticEmail'
							value='email@example.com'
						/>
					</div>
				</div>
				<div class='mb-3 '>
					<label for='inputPassword' class='col-sm-2 col-form-label'>
						Password
					</label>
					<div class='col-sm-10'>
						<input type='password' class='form-control' id='inputPassword' />
					</div>
				</div>
			</div>
			<div className='container'>
				<Notes></Notes>
			</div>
		</div>
	)
}

export default Home
