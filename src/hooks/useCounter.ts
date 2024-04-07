import { useState } from "react";

export const useCounter = () => {
  // hooks can use built-in/custom hooks:
  const [count, setCount] = useState(0);

  return {count, setCount};
};

// array destructuring:
// const [c, setC] = useCounter();



const myArray = [1, 'fun'];

const [num, word] = myArray;