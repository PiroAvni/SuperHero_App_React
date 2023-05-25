import React, { useState, useEffect } from "react";
import axios from "axios"
import { SearchForm } from '../../components'
import logo from '../../../public/images/logo.png'
import './style.css'

const Navbar = () => {
  const [heroData, setHeroData] = useState([]);
  const [name, setName] = useState("superman");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function searchHeroAPI() {
      try {
       
        const response = await axios.get(
          `https://superheroapi.com/api.php/10160846917000330/search/${name}`
        )
        console.log(response)
        const results = await response.results;
        setIsLoading(false)
          // const data = results.map((h) => h.hero);
        setHeroData(results);
     
      } catch (error) {
        console.log("Error occurred during API request:", error);
      }
      setIsLoading(false)
    }

    searchHeroAPI();
  }, []);
  
  function handleSearch(userInput) {
    setName(userInput);
    console.log(userInput);
  }
  console.log(heroData);
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-search">
        <SearchForm handleSearch={handleSearch} isLoading={isLoading} />
        </div>
      </nav>
    );
  };
  
  export default Navbar;