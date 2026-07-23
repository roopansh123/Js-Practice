import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>counter : {counter}</h1>

      <button onClick={() => setCounter((prev) => prev + 1)}></button>
    </div>
  );
};

export default App;

