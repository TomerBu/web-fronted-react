import "./Card.scss";
import { FCC } from "../../@types/types";

const Card:FCC = ({ children }) => {
  return <div className="card-component">{children}</div>;
};

export default Card;