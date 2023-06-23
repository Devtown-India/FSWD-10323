import { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount");
    return () => console.log(`unmount`);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2 className="text-lg text-red-300 bold">{count}</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Bump
      </button>
    </div>
  );
};

export default Home;
