import React from "react";

function Banner({ GuessResults }) {
  const winningList = GuessResults?.filter(result => result.status === 'correct');
  if (winningList?.length === 5) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in {' '}
          <strong>3 guesses</strong>.
        </p>
      </div>
    )
  }
  return <div />;
}

export default Banner;
