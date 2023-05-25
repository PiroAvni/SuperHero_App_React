import {Routes ,Route} from 'react-router-dom'


import { Navbar } from './layout'
import './App.css'
function App() {


  return (
    <>
    <Routes>
      <Route>
    <Route path="/" element={<Navbar/>} />
    </Route>
     
    </Routes>
    </>
  )
}

export default App
