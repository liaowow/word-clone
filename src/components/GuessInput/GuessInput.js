import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const submitInput = (event) => {
    event.preventDefault();
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitInput}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input" 
        type="text"
        value={guess}
        onChange={event => setGuess(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
