import { Button, Stack } from "@mui/material";
import { useCounter } from "../hooks/useCounter";
import { useAuth } from "../hooks/useAuth";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

const Item = ({ text, collapsed, id, callback }) => {
  if (collapsed) {
    return (
      <button
        onClick={() => {
          callback(id);
        }}
      >
        Click to toggle
      </button>
    );
  }

  return <div>{text}</div>;
};

type MyComponentProps = { text: string; callback: () => void };

const MyComponent = memo(({ text, callback }: MyComponentProps) => {
  useEffect(() => {
    console.log("MyComponent was updated");
  });

  return <div onClick={callback}>{text}</div>;
});

const Playground = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyComponent text="hi" callback={useCallback(() => {}, [])} />
      <Button onClick={() => setCount((c) => c + 1)}>{count}</Button>
    </>
  );
};

const FizzBuzz = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const fizzBuzzResults = useMemo(() => {
    const results: string[] = [];
    for (let i = 0; i < 1000; i++) {
      //divisible by 3 "fizz"
      //divisible by 5 "buzz"
      //divisible by 15 "fiz-buzz"
      //not divisible - ""
      if (i % 3 == 0 && i % 5 == 0) {
        results.push("fizz-buzz");
      } else if (i % 3 == 0) {
        results.push("fizz");
      } else if (i % 5 == 0) {
        results.push("buzz");
      } else {
        results.push("");
      }
    }

    return results;
  }, []);

  return (
    <Stack>
      {currentNumber}
      <Button onClick={() => setCurrentNumber((c) => c + 1)}>Next</Button>;
    </Stack>
  );
};

const initialState = 0;

const reducer = (state: number, action: string) => {
  switch (action) {
    case "plus":
      return state + 1;
    case "minus":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Stack>
      <h2>{state}</h2>
    </Stack>
  );
};

export default Playground;
