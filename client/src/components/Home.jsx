import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

const Home = () => {
  const [arr, setArr] = useState([
    "this si something",
    "this is something else",
    "this is something else again",
  ]);
  const generateRandomKey = () => {
    return Math.random().toString(5).substr(2, 9);
  };
  return (
    <div>
      <button onClick={() => setArr((prev) => ["new item", ...prev])}>
        Add
      </button>
      {arr.map((e, index) => {
        const id = nanoid();
        console.log(id);
        return (
          <div key={id} className="my-3">
            {e}{" "}
            <input
              type="text"
              id="large-input"
              className="w-1/3 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
            />{" "}
          </div>
        );
      })}
      {/* <div>{arr[0]}</div>
      <div>{arr[1]}</div>
      <div>{arr[2]}</div> */}
    </div>
  );
};

export default Home;
