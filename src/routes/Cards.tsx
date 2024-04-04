import { useEffect, useState } from "react";
import { CardType } from "../@types/types";
import { getCards } from "../services/cards";
import { Link } from "react-router-dom";
import Spinners from "../components/Spinners";

const Cards = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  //SRP:
  useEffect(() => {
    setError(null);
    setLoading(true);
    getCards()
      .then((res) => {
        setCards(res.data);
        setError(null);
      })
      .catch((e) => {
        setError("Network error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {loading && <Spinners />}
      {error && <div>{error}</div>}
      
      {cards.map((c) => (
        <Link
          to={`cards/${c._id}`}
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
