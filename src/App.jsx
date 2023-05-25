import {Router ,Route} from 'react-router-dom'


import { NavBar } from './layout'
import './App.css'
function App() {


  return (
    <>
    <Router>
    <Route path="/" element={<NavBar/>} />
      
      </Router>
    </>
  )
}

export default App
