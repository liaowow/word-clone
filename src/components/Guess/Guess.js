import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const wordToCheck = word?.value;
  const GuessResults = checkGuess(wordToCheck, answer);

  return (
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
  );
}

export default Guess;
