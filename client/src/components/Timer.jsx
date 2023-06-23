import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  const initialiseTimer = () => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    // this only executes on mount
    initialiseTimer();
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      {count}
      {/* <h2 className="text-lg text-red-300 bold">{count}</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Inc
      </button>
      <div>{name}</div> */}
    </div>
  );
};

export default Timer;
