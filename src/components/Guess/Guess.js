import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

function Guess({ word, answer, numOfGuesses }) {
  const wordToCheck = word?.value;
  const GuessResults = checkGuess(wordToCheck, answer);

  return (
    <>    
      <div className="guess">
        {range(5).map((num) => (
          <span 
            key={num} 
            className={`cell ${GuessResults ? GuessResults[num].status : ''}`}
          >
            {word ? word.value[num] : undefined}
          </span>
        ))}
      </div>
      <Banner 
        GuessResults={GuessResults}
        numOfGuesses={numOfGuesses}
      />
    </>
  );
}

export default Guess;
