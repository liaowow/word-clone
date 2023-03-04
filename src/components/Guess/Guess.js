import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess() {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row, index) => (
        <p key={index} className="guess">
          <span className="cell">G</span>
          <span className="cell">U</span>
          <span className="cell">E</span>
          <span className="cell">S</span>
          <span className="cell">S</span>
        </p>
      ))}
    </div>
  );
}

export default Guess;
