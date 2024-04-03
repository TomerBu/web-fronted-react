import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardType, ErrorType } from "../@types/types";
import { getCardById } from "../services/cards";

const Card = () => {

  // dynamic route: /cards/:id
  const { id } = useParams();
  const [card, setCard] = useState<CardType>();
  const [error, setError] = useState<ErrorType>();

  useEffect(() => {
    getCardById(id ?? "")
      .then((res) => {
        setCard(res.data);
      })
      .catch((e) => {
        const status = e.response.status;
        const message = e.message;
        const details = e.response.data;

        setError({ status, message, details });
      });
  }, []);
  return error ? (
    <div>
      <h2>{error.message}</h2>
    </div>
  ) : (
    <div>
      <h2>{card?.title}</h2>
      <p>{card?.subtitle}</p>
      <img src={card?.image.url} alt={card?.image.alt} />
    </div>
  );
};

export default Card;
