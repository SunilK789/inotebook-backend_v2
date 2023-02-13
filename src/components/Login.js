import React, {useContext, useState} from "react"
import noteContext from "../context/notes/noteContext"
import {useNavigate} from "react-router-dom"

const host = "http://localhost:5000"

const Login = (props) => {
	const context = useContext(noteContext)
	const {showAlert, getUser} = context
	const navigate = useNavigate()
	const [credencials, setCredencials] = useState({email: "", password: ""})

	const onChange = (e) => {
		setCredencials({...credencials, [e.target.name]: e.target.value})
		console.log(credencials)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log("handleLoginSubmit")

		const response = await fetch(`${host}/api/auth/login`, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: credencials.email,
				password: credencials.password,
			}), // body data type must match "Content-Type" header
		})
		const json = await response.json() // parses JSON response into native JavaScript objects
		//console.log(json.authToken)

		if (!json.success) {
			showAlert("Invalid credencials", "danger")
		} else {
			localStorage.setItem("token", json.authToken)
			console.log("Form login page token: " + localStorage.getItem("token"))
			console.log("Form login page token2: " + json.authToken)

			showAlert("Login successfull!", "success")
			getUser()
			navigate("/")
		}
	}

	return (
		<section className='vh-100'>
			<div className='container h-100'>
				<div className='row d-flex justify-content-center h-100'>
					<div className='col-lg-6 col-xl-6'>
						<div className='card text-black' style={{borderRadius: "25px"}}>
							<div className='card-body p-md-5'>
								<div className='row justify-content-center'>
									<div className='col-md-10 col-lg-3 col-xl-10 order-2 order-lg-1'>
										<p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
											Login
										</p>
										<form onSubmit={handleSubmit}>
											<div className='mb-3'>
												<label htmlFor='email' className='form-label'>
													Email address
												</label>
												<input
													type='email'
													className='form-control'
													id='email'
													name='email'
													aria-describedby='emailHelp'
													onChange={onChange}
													value={credencials.email}
													required
												/>
												<div id='emailHelp' className='form-text'>
													We'll never share your email with anyone else.
												</div>
											</div>
											<div className='mb-3'>
												<label htmlFor='password' className='form-label'>
													Password
												</label>
												<input
													type='password'
													className='form-control'
													id='password'
													name='password'
													onChange={onChange}
													value={credencials.password}
													required
												/>
											</div>
											<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
												<button
													type='submit'
													className='btn btn-primary btn-lg'
												>
													Login
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
