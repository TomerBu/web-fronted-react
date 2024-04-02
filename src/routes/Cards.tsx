import { useEffect, useState } from "react";
import { Card } from "../@types/types";
import { getCards } from "../services/cards";
import { Link } from "react-router-dom";

const Cards = () => {
  const [cards, setCards] = useState<Card[]>([]);

  //SRP:
  useEffect(() => {
    getCards().then((res) => setCards(res.data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {cards.map((c) => (
        <Link to={`cards/${c._id}`}
          key={c._id}
          className="shadow-2xl p-5 w-1/2 mx-auto rounded-md my-2 text-center"
        >
          <h2 className="text-xl">{c.title}</h2>
          <hr />
          <p>{c.subtitle}</p>
          <img src={c.image.url} alt={c.image.alt} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
