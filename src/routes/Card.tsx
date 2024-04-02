import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardType } from "../@types/types";
import { getCardById } from "../services/cards";

const Card = () => {
  // dynamic route: /cards/:id
  const { id } = useParams();
  const [card, setCard] = useState<CardType>();

  if (!id) {
    return <div>Error, No Such Card 404</div>;
  }

  useEffect(() => {
    getCardById(id)
      .then((res) => {
        setCard(res.data);
      })
      .catch((e) => {
        // setError / state
        alert(JSON.stringify(e));
      });
  }, []);
  return (
    <div>
      <h2>{card?.title}</h2>
      <p>{card?.subtitle}</p>
      <img src={card?.image.url} alt={card?.image.alt} />
    </div>
  );
};

export default Card;
