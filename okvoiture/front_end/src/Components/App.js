import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Background from './Background'
import Forms from './Forms'
import Cars from './Cars'


function App(){
	return (
		<>
			<BrowserRouter>
				<NavBar/>
				<Routes>
					<Route path="/" element={<Background/>}/>
					<Route path="/location" element={<Forms/>}/>
				</Routes>
				<Cars/>
			</BrowserRouter>
		</>
	)
}
export default App
