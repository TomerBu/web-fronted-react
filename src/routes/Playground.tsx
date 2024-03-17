import { useState } from "react";

const Item = ({ text, collapsed }) => {
  if (collapsed) {
    return <button>Click to open</button>;
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
      {data.map((item) => (
        <Item key={item.id} text={item.text} collapsed={item.collapsed} />
      ))}
    </div>
  );
};

export default Playground;
