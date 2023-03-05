import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Banner({ GuessResults, numOfGuesses, answer }) {
  const winningList = GuessResults?.filter(result => result.status === 'correct');
  if (numOfGuesses === NUM_OF_GUESSES_ALLOWED) {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }
  if (winningList?.length === 5) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in {' '}
          <strong>{numOfGuesses} guess{numOfGuesses > 1 ? `es` : ``}</strong>.
        </p>
      </div>
    )
  }
  return <div />;
}

export default Banner;
