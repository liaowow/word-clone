import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import Keyboard from '../Keyboard/Keyboard';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('pending');
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

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

  const handleRestart = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuessList([]);
    setGameStatus('pending');
  }

  const guessStatus = guessList.map(guess => checkGuess(guess.value, answer));

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
      <Keyboard 
        guessStatus={guessStatus} 
      />
      {
        gameStatus === 'won' && 
          <WonBanner
            numOfGuesses={guessList.length}
            handleRestart={handleRestart}
          />
      }
      {
        gameStatus === 'lost' && 
          <LostBanner
            answer={answer}
            handleRestart={handleRestart}
          />
      }
    </>
  );
}

export default Game;
