import { useParams } from "react-router-dom";

const Card = () => {
  // dynamic route: /cards/:id
  const { id } = useParams();
  return (
    <div>
      <h2>Card</h2>
      <p>Data for card {id}</p>
    </div>
  );
};

export default Card;
