import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Item = ({ text, collapsed, id, callback }) => {
  return (
    <div
      className="shadow-xl"
      onClick={() => {
        callback(id);
      }}
    >
      {collapsed ? <BiChevronDown size={100}/> : <BiChevronUp size={100}/>}
      {!collapsed && <div>{text}</div>}
    </div>
  );
};

const Practice = () => {
  const [data, setData] = useState([
    { text: "item 1", id: 1, collapsed: true },
    { text: "item 2", id: 2, collapsed: true },
    { text: "item 3", id: 3, collapsed: true },
  ]);
  return (
    <div className="flex flex-col">
      {data.map((item) => (
        <Item
          callback={(id) => {
            const copy = [...data];
            const index = copy.findIndex((item) => item.id === id);
            if (index === -1) return;
            // collapse all other items
            for (let i = 0; i < copy.length; i++) {
              if (i !== index) copy[i].collapsed = true;
            }
            // toggle the item:
            copy[index].collapsed = !copy[index].collapsed;

            setData(copy);
          }}
          key={item.id}
          text={item.text}
          collapsed={item.collapsed}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Practice;
