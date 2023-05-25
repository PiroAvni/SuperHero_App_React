import React from 'react'


const Maincard = ({heroData}) => {
  console.log(heroData)
  return (
    <div className='card-container'>
      <div className="card-background">
        <div className="card-frame">
          <div className="top-name">
            <p>{heroData.name}</p>
            <p>{heroData.id}</p>
          </div>
          <div className="hero-image">
            {/* {
              heroData.image.url
              ? <img src={heroData.image.url} alt="hero img" />
              : <p>No image</p>
            } */}
          </div>
          {/* <div className="stats">
            <div className="stats-left">
              <p>Intelligence: {heroData.powerstats.intelligence}</p>
              <p>Strength: {heroData.powerstats.strength}</p>
              <p>Speed: {heroData.powerstats.speed}</p>
            </div>
            <div className="stats-right">
              <p>Durability: {heroData.powerstats.durability}</p>
              <p>Power: {heroData.powerstats.power}</p>
              <p>Combat: {heroData.powerstats.combat}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Maincard
