import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info({ guess });
    const newList = [...guessList];
    newList.push(guess);
    setGuessList(newList);
    setGuess('');
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput 
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
