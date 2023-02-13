import {Link, useLocation, useNavigate} from "react-router-dom"
import React, {useContext, useEffect} from "react"
import noteContext from "../context/notes/noteContext"
import Alert from "./Alert"

const Navbar = (props) => {
	let location = useLocation()
	const context = useContext(noteContext)
	const {alerts, showAlert} = context

	// useEffect(() => {
	// 	console.log(token)
	// }, [])
	const navigate = useNavigate()

	const handleLogout = (e) => {
		e.preventDefault()
		console.log("before logout:" + localStorage.getItem("token"))
		localStorage.clear()
		console.log("after logout:" + localStorage.getItem("token"))
		showAlert("Logout successfull", "success")
		navigate("/login")
	}
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						iNotebook
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link
									className={`nav-link ${
										location.pathname === "/"
									}? "active":""`}
									aria-current='page'
									to='/'
								>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className={`nav-link ${
										location.pathname === "/about"
									}? "active":""`}
									to='/about'
								>
									About
								</Link>
							</li>
						</ul>
						<form className='d-flex'>
							{localStorage.getItem("token") === null ||
							localStorage.getItem("token") === "undefined" ? (
								<div>
									<Link
										role='button'
										className='btn btn-primary mx-1'
										to='/login'
									>
										Login &nbsp;<i className='fa-solid fa-right-to-bracket'></i>
									</Link>
									<Link
										role='button'
										className='btn btn-primary mx-1'
										to='/signup'
									>
										Signup &nbsp;<i className='fa-solid fa-user-plus'></i>
									</Link>
								</div>
							) : (
								<button
									role='button'
									className='btn btn-primary mx-1'
									onClick={handleLogout}
								>
									Logout &nbsp;
									<i className='fa-solid fa-arrow-right-from-bracket'></i>
								</button>
							)}
						</form>
					</div>
				</div>
			</nav>
			<Alert alert={alerts}></Alert>
		</>
	)
}

export default Navbar
