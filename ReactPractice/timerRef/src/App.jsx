import { useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalid = useRef(null);

  const handleStart = () => {
    intervalid.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>{seconds}</h1>
      <button onClick={handleStart}>start</button>
      <button>stop</button>
    </div>
  );
};

export default App;
