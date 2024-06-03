import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      console.log("You have to add more then 20 counter");
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      console.log("You have to reomve less then 0 counter");
    }
  }

  return (
    <div className="App">
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>
  );
}

export default App;
