import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cards, Maincard } from "../../components";

import { Outlet } from "react-router-dom";

const Home = ({ name }) => {
  // Destructure 'name' from props

  console.log("home:", name);
  const [heroData, setHeroData] = useState([]);
  const [pcHero, setPcHero] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function searchHeroAPI() {
      try {
        const response = await axios.get(
          `https://superheroapi.com/api.php/10160846917000330/search/${name}`
        );
        console.log(response);
        const { results } = await response.data;
        console.log(results);
        setLoading(false);
        setHeroData(results);
      } catch (error) {
        console.log("Error occurred during API request:", error);
        setLoading(false);
      }
    }

    searchHeroAPI();
  }, [name]);

  const fetchRandomHero = async () => {
    const randomId = Math.floor(Math.random() * 732);
    console.log(randomId, "id");
    try {
      const response = await axios.get(
        `https://www.superheroapi.com/api.php/6403898876320150/${randomId}`
      );
      const hero = await response.data;
      setPcHero(hero);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <>


      <button onClick={fetchRandomHero}>Get Random Hero</button>

      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <Cards pcHero={pcHero} />
         { }
          <Maincard
            heroData={heroData}
          />
        </>
      )}

      <Outlet name={name} />
    </>
  );
};

export default Home;
