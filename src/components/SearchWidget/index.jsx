import React, { useState, useEffect } from "react";
// import heroApi from '../../api/heroApi';

import { SearchForm } from "../";

export default function SearchWidget() {
//   const [compareHero, setcompareHero] = useState(false);
  const [heroData, setHeroData] = useState([]);
  const [search, setSearch] = useState("superman");





  useEffect(() => {
    async function searchHeroAPI() {
      const response = await fetch(
        `https://superheroapi.com/api/search/${search}`
      );
      const rawData = await response.json();
      const data = rawData.map((hero) => hero.hero);
      setHeroData(data);
    }

    searchHeroAPI();
  }, [search]);

  function handleSearch(userInput) {
    setSearch(userInput);
  }

console.log('SEARCH:', search)

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {/* {
    {<HeroList heroData={heroData} /> }
      } */}
    </>
  );
}