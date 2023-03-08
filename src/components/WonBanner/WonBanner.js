import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner 
      status='happy'
      action={handleRestart} 
      actionText='Restart Game'
    >
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{numOfGuesses} {numOfGuesses > 1 ? `guesses` : `guess`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
