import { useState } from "react";

const App = () => {
  const [miliseconds, update] = useState(0);
  const [seconds, secupdate] = useState(0);
  const [minutes, minupdate] = useState(0);
  const [id, setId] = useState(null);

  function start() {
    if (id !== null) return;

    const intervalId = setInterval(() => {
      update((prev) => {
        if (prev === 9) {
          secupdate((s) => {
            if (s === 59) {
              minupdate((m) => m + 1);
              return 0;
            }
            return s + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    setId(intervalId);
  }

  function stop() {
    clearInterval(id);
    setId(null);
  }

  function reset() {
    clearInterval(id);
    setId(null);
    update(0);
    secupdate(0);
    minupdate(0);
  }

  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <div>
      <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>:
      <span>{formatTime(miliseconds)}</span>
      <br />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
