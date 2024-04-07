import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardType } from "../@types/types";

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
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(`${date}`);
    }, 1000);

    //cleanup = run code when the component is unMounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Stack>{time}</Stack>;
};

export default Playground;
