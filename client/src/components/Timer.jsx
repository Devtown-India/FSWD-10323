import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  const interval = setInterval(() => {
    setTime((prev) => prev + 1);
  }, 1000);

  return (
    <div>
      <h1>Timer</h1>
      {time}
      {/* <h2 className="text-lg text-red-300 bold">{count}</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Inc
      </button> */}
    </div>
  );
};

export default Timer;
