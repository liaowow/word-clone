import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess 
          key={num} 
          word={guessList[num]} 
          answer={answer}
          numOfGuesses={guessList.length}
        />
      ))}
    </div>
  );
}

export default GuessResults;
