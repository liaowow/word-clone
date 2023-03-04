import React from "react";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map(({value, id}, index) => (
        <p key={id} className="guess">
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
