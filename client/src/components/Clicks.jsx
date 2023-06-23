import { useState, useEffect } from "react";

const Clicks = () => {
  const [clicks, setClicks] = useState(0);

  const listenClicks = () => {
    setClicks((prev) => prev + 1);
  };

  useEffect(() => {
    document.addEventListener("click", listenClicks);
    return () => document.removeEventListener("click", listenClicks);
  }, []);

  return (
    <div>
      <h1>Clicks</h1>
      {clicks}
    </div>
  );
};

export default Clicks;
