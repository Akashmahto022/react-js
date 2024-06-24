import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(15);
  const addvalue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const subtract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={() =>
          counter < 20 ? setCounter(counter + 1) : setCounter(20)
        }
      >
        Add Value
      </button>

      <button
        onClick={() => (counter > 0 ? setCounter(counter - 1) : setCounter(0))}
      >
        Subtract Value
      </button>
    </div>
  );
};

export default App;

