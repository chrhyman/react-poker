import { ImClubs, ImHeart, ImSpades, ImDiamonds } from "react-icons/im";

import "./cards.css";

export const Card = ({ card, selected }) => {
  const rank = card.charAt(0).toUpperCase();
  const suit = card.charAt(1).toUpperCase();
  const color = ["H", "D"].includes(suit) ? "red" : "black";
  const icon =
    suit === "C" ? (
      <ImClubs />
    ) : suit === "D" ? (
      <ImDiamonds />
    ) : suit === "H" ? (
      <ImHeart />
    ) : suit === "S" ? (
      <ImSpades />
    ) : (
      "err"
    );
  const classes = `card ${color}`;
  return (
    <div className={selected ? "card-container selected" : "card-container"}>
      <div className={classes}>
        {icon}
        <p>
          <strong>{rank === "T" ? "10" : rank}</strong>
        </p>
      </div>
      {selected ? <div className="held">HELD</div> : <></>}
    </div>
  );
};
