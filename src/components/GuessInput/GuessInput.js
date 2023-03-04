import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const submitInput = (event) => {
    event.preventDefault();
    console.info({ guess });
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitInput}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input" 
        type="text"
        value={guess}
        onChange={event => setGuess((event.target.value).toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
