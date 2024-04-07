import { Button } from "@mui/material";
import { useCounter } from "../hooks/useCounter";
import { useAuth } from "../hooks/useAuth";

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

const Playground = () => {

  const { count, setCount } = useCounter();
  const { count: count2, setCount: setCount2 } = useCounter();
  return (
    <>
      <Button onClick={() => setCount((c) => c + 1)}>{count}</Button>
      <Button onClick={() => setCount2((c) => c + 1)}>{count2}</Button>
    </>
  );
};

export default Playground;
