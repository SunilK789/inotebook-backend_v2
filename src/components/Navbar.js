import {Link, useLocation, useNavigate} from "react-router-dom"
import React, {useContext, useEffect} from "react"
import noteContext from "../context/notes/noteContext"
import Alert from "./Alert"

const Navbar = (props) => {
	let location = useLocation()
	const context = useContext(noteContext)
	const {alerts, showAlert, userData, getUser, setUserData} = context

	const navigate = useNavigate()

	const handleLogout = (e) => {
		e.preventDefault()
		localStorage.clear()
		setUserData(null)
		showAlert("Logout successfull", "success")
		navigate("/login")
	}
	useEffect(() => {
		if (userData) {
			getUser()
			console.log(userData.user.name)
			console.log(userData.user.email)
		}
	}, [])
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
							{userData ? (
								<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
									<li className='nav-item btn btn-light mx-2'>
										<i className='fa-sharp fa-solid fa-user-tie'></i> &nbsp;Hi{" "}
										{userData.user.name}
									</li>
									<li className='nav-item btn btn-light mx-2'>
										<i className='fa-solid fa-envelope'></i> &nbsp;
										{userData.user.email}
									</li>
								</ul>
							) : (
								""
							)}
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
								<button className='btn btn-primary mx-1' onClick={handleLogout}>
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
