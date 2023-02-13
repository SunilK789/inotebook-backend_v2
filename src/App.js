import Navbar from "./components/Navbar"
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import NoteState from "./context/notes/NoteState"
import React from "react"
import Login from "./components/Login"
import Signup from "./components/Signup"

const App = () => {
	return (
		<>
			<NoteState>
				<Router>
					<Navbar></Navbar>

					<div className='container'>
						<Routes>
							<Route exact path='/' element={<Home></Home>}></Route>
							<Route exact path='/about' element={<About></About>}></Route>
							<Route exact path='/login' element={<Login></Login>}></Route>
							<Route
								exact
								path='/signup'
								element={<Signup initialState={false}></Signup>}
							></Route>
						</Routes>
					</div>
				</Router>
			</NoteState>
		</>
	)
}

export default App
