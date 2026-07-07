import { useState } from "react";

const App = () => {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCounter(count + 1)}>Increment</button>
      <button onClick={() => setCounter(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
