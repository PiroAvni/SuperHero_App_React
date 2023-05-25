import React, { useState, useEffect } from "react";
import heroApi from '../../api/heroApi';

import { SearchForm } from "../";

export default function SearchWidget() {

  const [compareHero, setcompareHero] = useState(false);
  const [heroData, setHeroData] = useState([]);
  const [search, setSearch] = useState("superman");

// useEffect(() => {
//     getHeroByName(search)
//     setHeroData(data)

// }, []);



  useEffect(() => {
    async function searchAPI() {
      const response = await fetch(
        `https://superheroapi.com/api/${search}`
      );
      const rawData = await response.json();
      const data = rawData.map((hero) => hero.hero);
      setHeroData(data);
    }

    searchAPI();
  }, [search]);

  function handleSearch(hero) {
    setSearch(hero);
  }

  function handleSearch(search) {

   
    console.log(search)
  }
console.log('SEARCH:', search)

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {
    
          
     
      }
    </>
  );
}