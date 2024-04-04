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
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const api = `https://rickandmortyapi.com/api/character/?name=${search}`;

  useEffect(() => {
    axios.get(api).then((res)=>{
      setResults(res.data.results);
    });
  }, [search]);

  return (
    <Stack>
      <TextField
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        variant="filled"
        label="Search"
      />

      <Button variant="contained">Search</Button>

      {results.map((r) => (
        <div key={r.id}>{r.name}</div>
      ))}
    </Stack>
  );
};

export default Playground;
