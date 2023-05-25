import React from 'react'

const Cards = (pcHero) => {
  console.log(pcHero)
  return (
    <div className='card-container'>
      <div className="card-background">
        <div className="card-frame">
          <div className="top-name">
            <p>{pcHero.pcHero.name}</p>
            <p>{pcHero.pcHero.id}</p>
          </div>
          <div className="hero-image">
            {
              pcHero.pcHero.image.url
              ? <img src={pcHero.pcHero.image.url} alt="hero img" />
              : <p>No image</p>
            }
          </div>
          <div className="stats">
            <div className="stats-left">
              <p>Intelligence: {pcHero.pcHero.powerstats.intelligence}</p>
              <p>Strength: {pcHero.pcHero.powerstats.strength}</p>
              <p>Speed: {pcHero.pcHero.powerstats.speed}</p>
            </div>
            <div className="stats-right">
              <p>Durability: {pcHero.pcHero.powerstats.durability}</p>
              <p>Power: {pcHero.pcHero.powerstats.power}</p>
              <p>Combat: {pcHero.pcHero.powerstats.combat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
