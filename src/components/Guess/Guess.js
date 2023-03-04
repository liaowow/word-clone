import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <div className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {word ? word.value[num] : undefined}
        </span>
      ))}
    </div>
  );
}

export default Guess;
