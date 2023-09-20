import { Suspense } from "react";
import { CardSuspense } from "./suspense";

const Card = ({ name, status, image }) => {
  return (
    <Suspense fallback={<CardSuspense />}>
      <div className="card-container">
        <img className="rounded-t-lg w-full" src={image} alt={name} />
        <div className="p-5">
          <h5 className="card-title">{name}</h5>
          <p className="card-subtitle">{status}</p>
        </div>
      </div>
    </Suspense>
  );
};

export default Card;
