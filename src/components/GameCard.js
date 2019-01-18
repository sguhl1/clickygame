import React from 'react';

export const GameCardContainer = (props) => {
  return (
    <div className="row align-items-stretch">
      {props.simpsonsList.map(simpson => {
        return (
          <div key={simpson.id} className="col-2 col-md-1>">
            <GameCard 
            img={simpson.image}
            handleCardClick={props.handleCardClick}
            id={simpson.id}
            />
          </div>
        )
      })}
    </div>
  )
}

const GameCard = (props) => {
  return (
    <div className="card" onClick={() => props.handleCardClick(props.id)}>
      <img src={props.img} alt={props.img} className="card-img"/>
    </div>
  )
}
