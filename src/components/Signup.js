import React, {useContext, useEffect, useState} from "react"
import noteContext from "../context/notes/noteContext"
import {Link, useNavigate} from "react-router-dom"

const host = "http://localhost:5000"

const Signup = (props) => {
	const context = useContext(noteContext)
	const {token, showAlert} = context
	const [singUpSuccess, setSingUpSuccess] = useState(false)
	console.log("inside signUP")
	console.log("initialState: " + props.initialState)
	// props.initialState = true
	// console.log("initialState set to true: " + props.initialState)

	//setSingUpSuccess(false)

	const clearToken = () => {
		console.log("inside clear token")
		setSingUpSuccess(false)
		console.log(
			"inside clear token singUpSuccess after false: " + singUpSuccess
		)
	}

	useEffect(() => {
		clearToken()
	}, [])
	//clearToken()
	//setSingUpSuccess(false)
	const navigate = useNavigate()
	const [register, setRegister] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	})
	const onChange = (e) => {
		setRegister({...register, [e.target.name]: e.target.value})
		console.log(register)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log("handleSubmit")

		const response = await fetch(`${host}/api/auth/createuser`, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: register.name,
				email: register.email,
				password: register.password,
			}), // body data type must match "Content-Type" header
		})
		const json = await response.json() // parses JSON response into native JavaScript objects
		console.log(json)
		if (!json.success) {
			for (let index = 0; index < json.errors.length; index++) {
				const element = json.errors[index]
				showAlert(element.msg, "danger")
			}
		} else {
			setSingUpSuccess(json.success)
			props.initialState = true
			showAlert("Singedup Successfully!", "success")
		}
	}

	const handleLoginButton = () => {
		if (singUpSuccess) {
			navigate("/login")
		}
	}

	const passwordCompare = () => {
		if (register.password !== null && register.confirmPassword !== null) {
			console.log("inside conf pass")
		}
	}
	console.log(localStorage.getItem("token"))

	return (
		<section className='vh-100'>
			<div className='container h-100'>
				<div className='row d-flex justify-content-center  h-100'>
					<div className='col-lg-12 col-xl-6'>
						<div className='card text-black' style={{borderRadius: "25px"}}>
							<div className='card-body p-md-5'>
								<div className='row justify-content-center'>
									{!singUpSuccess ? (
										<div>
											<div className='col-md-10 col-lg-6 col-xl-10 order-2 order-lg-1'>
												<p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
													Sign up
												</p>
												<form className='mx-1 mx-md-4' onSubmit={handleSubmit}>
													<div className='d-flex flex-row align-items-center mb-4'>
														<i className='fas fa-user fa-lg me-3 fa-fw'></i>
														<div className='form-outline flex-fill mb-0'>
															<input
																type='text'
																id='name'
																name='name'
																className='form-control'
																onChange={onChange}
																required
															/>
															<label
																className='form-label'
																htmlFor='form3Example1c'
															>
																Your Name
															</label>
														</div>
													</div>

													<div className='d-flex flex-row align-items-center mb-4'>
														<i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
														<div className='form-outline flex-fill mb-0'>
															<input
																type='email'
																id='email'
																name='email'
																className='form-control'
																onChange={onChange}
																required
															/>
															<label
																className='form-label'
																htmlFor='form3Example3c'
															>
																Your Email
															</label>
														</div>
													</div>

													<div className='d-flex flex-row align-items-center mb-4'>
														<i className='fas fa-lock fa-lg me-3 fa-fw'></i>
														<div className='form-outline flex-fill mb-0'>
															<input
																type='password'
																id='password'
																name='password'
																className='form-control'
																onChange={onChange}
																required
															/>
															<label
																className='form-label'
																htmlFor='form3Example4c'
															>
																Password
															</label>
														</div>
													</div>

													<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
														<button
															type='submit'
															className='btn btn-primary btn-lg'
														>
															Register
														</button>
													</div>
												</form>
											</div>
										</div>
									) : (
										<div className='card text-center'>
											<h5 className='card-header'>Singup success</h5>
											<div className='card-body'>
												<p className='card-text'>
													Click on login button to Login
												</p>
												<Link
													to='/'
													className='btn btn-primary'
													onClick={handleLoginButton}
												>
													Login
												</Link>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Signup
