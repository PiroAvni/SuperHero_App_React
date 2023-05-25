// import React, { useState, useEffect } from "react";
// // import heroApi from '../../api/heroApi';

// import { SearchForm } from "../";

// export default function SearchWidget() {

//   const [heroData, setHeroData] = useState([]);
//   const [name, setName] = useState("superman");

  
//   useEffect(() => {
//     async function searchHeroAPI() {
//       try {
//         const response = await fetch(
//           `https://superheroapi.com/api/10160846917000330/search/${name}`
//         );
//         const rawData = await response.json();
//         const data = rawData.map((h) => h.hero);
//         setHeroData(data);
//       } catch (error) {
//         console.log("Error occurred during API request:", error);
//       }
//     }

//     searchHeroAPI();
//   }, [name]);

//   function handleSearch(userInput) {
//     setName(userInput);
//     console.log(userInput);
//   }

//   console.log(heroData);
//   return (
//     <>
//       <SearchForm handleSearch={handleSearch} />
//     </>
//   );
// }
