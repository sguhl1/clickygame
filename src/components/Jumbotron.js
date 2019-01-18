import React from 'react';
import './Jumbotron.css';

const Jumbotron = (props) => {
  return (
    <div className="jumbotron" style={{backgroundImage: "url(https://kokyun.files.wordpress.com/2010/02/118631-wholesimpsons.jpg?w=595)"}}>
      <h1 className ="display-4">Simpsons Characters Clicky Game!</h1> 
      <h1 className = "display-5">Click on Each Picture, but don't click twice on the same one, or you start over!</h1>
      <h3>Current Score: {props.currentScore}</h3>
      <h3>Top Score: {props.topScore}</h3>
      <h3>{props.message}</h3>
      {props.children}
      
      
    </div>
  )
}

export default Jumbotron;