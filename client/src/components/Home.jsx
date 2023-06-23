import { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("making api call");
    }, 500);

    return () => clearTimeout(timeout);
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} type="text" />
      <div>{name}</div>
    </div>
  );
};

export default Home;
