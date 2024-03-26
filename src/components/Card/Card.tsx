import { FC, ReactNode } from "react";
import "./Card.scss";
interface CardProps {
  children: ReactNode;
}

const Card = ({ children }) => {
  return <div className="card-component">{children}</div>;
};

export default Card;

/*
    <Card>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
    <Card/>    


    <Card>
        <>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </>    
    <Card/>    
*/
