import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [userHero, setUserHero] = useState('')
  const [pcHero, setPcHero] = useState('')

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 701)
    console.log(randomId)

    const fetchHero = async () => {

      try {
        const response = await axios.get(`https://www.superheroapi.com/api.php/6403898876320150/${randomId}`)
        console.log(response)
        const hero = await response.data
        setPcHero(hero)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchHero()
  }, [])

  console.log(pcHero)

  return (
    <>

    </>
  )
}

export default App
