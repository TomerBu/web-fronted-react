import { Link } from "react-router-dom";
import Spinners from "../components/Spinners";
import { useCards } from "../hooks/useCards";

const Cards = () => {
  const {cards, loading, error} = useCards();

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
