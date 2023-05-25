
import { useState, useEffect, } from 'react'
import axios from 'axios'
import './App.css'
import Cards from './components/Cards'
=======
import {Routes ,Route} from 'react-router-dom'



import { Navbar } from './layout'
import './App.css'
function App() {
  // const [userHero, setUserHero] = useState({})
  const [pcHero, setPcHero] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchHero = async () => {
    const randomId = Math.floor(Math.random() * 732)
    console.log(randomId, 'id')
    try {
      const response = await axios.get(`https://www.superheroapi.com/api.php/6403898876320150/${randomId}`)
      const hero = await response.data
      setPcHero(hero)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }
   useEffect(() => {
    fetchHero()
  }, [])

  return (
    <>

    {
      loading ? <p>Loading....</p> : <Cards pcHero={pcHero}/>
    }
=======
    <Routes>
      <Route>
    <Route path="/" element={<Navbar/>} />
    </Route>
     
    </Routes>

    </>
  )
}

export default App
