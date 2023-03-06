import React from "react";

function Keyboard() {
  const keyboardRows = [
    'QWERTYUIOP',
    'ASDFGHJKL',
    'ZXCVBNM'
  ];
  return (
    <div className='keyboardContainer'>
      {keyboardRows.map(row => (
        <div className='keyboardRow'>
          {row.split('').map(letter => <span className='keyboardLetter'>{letter}</span>)}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
