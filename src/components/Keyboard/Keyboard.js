import React from "react";

const getStatusByLetter = (statusReport) => {
  const statusObj = {};
  statusReport.forEach(report => {
    report.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });
  return statusObj;
}

function Keyboard({ guessStatus }) {
  let letterStatus = getStatusByLetter(guessStatus);
  const keyboardRows = [
    'QWERTYUIOP',
    'ASDFGHJKL',
    'ZXCVBNM'
  ];
  return (
    <div className='keyboardContainer'>
      {keyboardRows.map((row, idx) => (
        <div key={idx} className='keyboardRow'>
          {row.split('').map(letter => {
            return (
              <span
                key={letter} 
                className={`keyboardLetter ${letterStatus[letter] || ''}`}
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
