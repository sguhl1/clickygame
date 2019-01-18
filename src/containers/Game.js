import React, {Component} from 'react';
import Jumbotron from '../components/Jumbotron';
import {GameCardContainer} from '../components/GameCard';

import data from '../data.json';

class Game extends Component {
  state = {
    simpsonsList: data,
    currentScore: 0,
    topScore: 0,
    message: ""
    

  };
  
  //create method to handle card click
  handleCardClick = (id) => {
    let guessedCorrectly = false;

    //find simpson we clicked on and check if we clicked on it already, if not set clicked property to true
    const updatedsimpsonsList = this.state.simpsonsList.map(simpson => {
      //check Simpson we clicked on by matching id
      if (simpson.id === id) {
        if (!simpson.clicked){
          simpson.clicked = true;
          guessedCorrectly = true;
        }
      }
      return simpson;
    });
    //check to see if guessedcorrectly is set to true if true, we shuffle cards and keep playing, if false game over because you clicked someone a second time
    (guessedCorrectly) ?
      this.handleCorrectGuess(updatedsimpsonsList) :
      this.handleIncorrectGuess(updatedsimpsonsList) 
    
  }
// shuffle stuff at random
  shufflesimpsons = (simpsonsList) => simpsonsList.sort(() => .5 - Math.random());
  

  handleCorrectGuess = (simpsonsList) => {
    //destructure score and topscore from state so we can update it
    const {currentScore, topScore, message} = this.state

    //update score
    const newScore = currentScore + 1;
    //if newScore is greater tan the current topscore, newscore is the new topscorp
    const newTopScore = (newScore > topScore) ? newScore : topScore;

    this.setState({
      simpsonsList: this.shufflesimpsons(simpsonsList),
      currentScore: newScore,
      topScore: newTopScore
    });
    if (newScore > 0) {
      this.setState({
        message:""
      });
    }
    
    if (newScore > 17) {

      const resetsimpsonList = simpsonsList.map(simpson => {
        simpson.clicked = false;
        return simpson;
      });
      //update state to show score is now 0 and shuffle simpsons
  
      this.setState({
        simpsonsList: this.shufflesimpsons(resetsimpsonList),
        currentScore: 0,
        message: "Congratulations! You Win! Click and image to play again"
      });
    };
    
  }

  // handle incorrect guess
  handleIncorrectGuess = (simpsonsList) => {

    //reset simpsons list
    const resetsimpsonList = simpsonsList.map(simpson => {
      simpson.clicked = false;
      return simpson;
    });
    //update state to show score is now 0 and shuffle simposns

    this.setState({
      simpsonsList: this.shufflesimpsons(resetsimpsonList),
      currentScore: 0,
      message: "I'm Sorry, better luck next time. Click an image to start again"
    });
    
  }


  render () {
    return (
      <div>
    
    <Jumbotron
      currentScore={this.state.currentScore}
      topScore={this.state.topScore}
      message={this.state.message}
    >
    </Jumbotron>
    <div className="container">
      <GameCardContainer simpsonsList={this.state.simpsonsList}
      handleCardClick={this.handleCardClick}/>
    </div>
    </div>
    )
  }
}

export default Game;