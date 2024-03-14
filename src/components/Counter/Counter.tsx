import { useState } from "react";

function Counter() {
  const [x, setX] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setX(x + 1)}
        className="bg-purple-400 p-5 rounded-xl text-white text-2xl"
      >
        +
      </button>
      <p>{x}</p>
      <button
        onClick={() => setX(x - 1)}
      
        className="bg-purple-400 p-5 rounded-xl text-white text-2xl"
      >
        -
      </button>
    </div>
  );
}

export default Counter;
