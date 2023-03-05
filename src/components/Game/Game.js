import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('pending');
  const [guessList, setGuessList] = React.useState([]);

  const handleSubmitGuess = (guess) => {
    const newGuess = {
      value: guess,
      id: `${guess}-${Math.random()}`,
    }
    const newGuessList = [...guessList, newGuess];
    setGuessList(newGuessList);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults 
        guessList={guessList} 
        answer={answer}
      />
      <GuessInput 
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess} 
      />
      {
        gameStatus === 'won' && 
          <WonBanner
            numOfGuesses={guessList.length}
          />
      }
      {
        gameStatus === 'lost' && 
          <LostBanner
            answer={answer}
          />
      }
    </>
  );
}

export default Game;
