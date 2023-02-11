import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import NoteState from "./context/notes/NoteState"

function App() {
	return (
		<>
			<NoteState>
				<Router>
					<Navbar></Navbar>
					<Routes>
						<Route exact path='/' element={<Home></Home>}></Route>
						<Route exact path='/about' element={<About></About>}></Route>
					</Routes>
				</Router>
			</NoteState>
		</>
	)
}

export default App
