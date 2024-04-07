import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const api = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards`;
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    axios.get(api).then((res) => setAllCards(res.data));
  }, []);

  return (
    <Stack>
      {allCards.map((c) => (
        <div key={c._id}>{c.title}</div>
      ))}
    </Stack>
  );
};

export default Playground;
