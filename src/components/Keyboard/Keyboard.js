import React from "react";

function Keyboard({ guessStatus }) {
  const keyboardRows = [
    'QWERTYUIOP',
    'ASDFGHJKL',
    'ZXCVBNM'
  ];
  return (
    <div className='keyboardContainer'>
      {keyboardRows.map(row => (
        <div className='keyboardRow'>
          {row.split('').map(letter => {
            let updatedStatus = '';
            for (const letterGroup of guessStatus) {
              if (letterGroup.letter === letter) {
                updatedStatus = letterGroup.status;
              }
            }
            return (
              <span
                key={letter} 
                className={`keyboardLetter ${updatedStatus}`}
              >
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
