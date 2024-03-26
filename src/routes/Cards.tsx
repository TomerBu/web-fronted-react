import { useEffect, useState } from "react";
import { Card } from "../@types/types";
import { getCards } from "../services/cards";

const Cards = () => {
  const [cards, setCards] = useState<Card[]>([]);

  //SRP:
  useEffect(() => {
    // fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setCards(json);
    //     console.log(json);
    //   });
    getCards().then((res) => setCards(res.data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {cards.map((c) => (
        <div
          key={c._id}
          className="shadow-2xl p-5 w-1/2 mx-auto rounded-md my-2 text-center"
        >
          <h2 className="text-xl">{c.title}</h2>
          <hr />
          <p>{c.subtitle}</p>
          <img src={c.image.url} alt={c.image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
