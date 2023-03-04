import React from "react";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((word, index) => (
        <p key={`${word}-${index}`} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
