import React from "react";

function Banner({ GuessResults, numOfGuesses }) {
  const winningList = GuessResults?.filter(result => result.status === 'correct');
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
