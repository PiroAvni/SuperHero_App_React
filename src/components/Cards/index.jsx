import React from 'react'

const Cards = (pcHero) => {
  console.log(pcHero)
  return (
    <div className='card'>
      <div className="top-name">
        <h2>{pcHero.pcHero.name}</h2>
        <h2>{pcHero.pcHero.id}</h2>
      </div>
      <div className="hero-image">
        {
          pcHero.pcHero.image.url
          ? <img src={pcHero.pcHero.image.url} alt="hero img" />
          : <p>No image</p>
        }
      </div>
      <div className="stats">
        <ul>
          <li>Intelligence: {pcHero.pcHero.powerstats.intelligence}</li>
          <li>Strength: {pcHero.pcHero.powerstats.strength}</li>
          <li>Speed: {pcHero.pcHero.powerstats.speed}</li>
          <li>Durability: {pcHero.pcHero.powerstats.durability}</li>
          <li>Power: {pcHero.pcHero.powerstats.power}</li>
          <li>Combat: {pcHero.pcHero.powerstats.combat}</li>
        </ul>
      </div>
      <div className="publisher">
        <h2>{pcHero.pcHero.biography.publisher}</h2>
      </div>
    </div>
  )
}

export default Cards
