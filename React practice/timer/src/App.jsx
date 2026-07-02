import { useState } from "react";

const App = () => {
  const [time, updateTime] = useState(0);
  const [id, setId] = useState(null);

  function update() {
    if (id !== null) {
      return;
    }
    const intervalid = setInterval(() => {
      updateTime((prev) => prev + 1);
    }, 1000);
    setId(intervalid);
  }

  function stop() {
    clearInterval(id);
    setId(null);
  }

  function reset() {
    clearInterval(id);
    setId(null);
    updateTime(0);
  }

  return (
    <div>
      <h1>Timer</h1>
      <p>{time}</p>

      <button onClick={update}>Start</button>

      <button onClick={stop}>Stop</button>

      <button onClick={reset}> reset </button>
    </div>
  );
};

export default App;
