import Navbar from "./components/Navbar"
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import NoteState from "./context/notes/NoteState"
import React from "react"

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
						</Routes>
					</div>
				</Router>
			</NoteState>
		</>
	)
}

export default App
