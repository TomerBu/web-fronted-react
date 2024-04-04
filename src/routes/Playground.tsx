import { Button } from "@mui/material";
import { useState } from "react";

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
  const [data, setData] = useState([
    { text: "item 1", id: 1, collapsed: true },
    { text: "item 2", id: 2, collapsed: true },
    { text: "item 3", id: 3, collapsed: true },
  ]);
  
  return (
    <div>
      <Button variant="text">Im a button</Button>

      {data.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          collapsed={item.collapsed}
          id={item.id}
          callback={(id) => {
            // child {1} was clicked
            console.log(id);

            const copy = [...data];
            const index = copy.findIndex((item) => item.id === id);
            //close all the items:
            for(let i = 0 ;i < copy.length; i++){
                copy[i].collapsed = true;
            }
            //toggle the clicked item:
            copy[index].collapsed = !copy[index].collapsed;
            setData(copy);
          }}
        />
      ))}
    </div>
  );
};

export default Playground;
