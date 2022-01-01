import { useState } from "react";

import "./cards.css";

import { Card } from "./card";

export default function Cards({ cardList }) {
  const [selectedCards, setSelectedCards] = useState([]);
  const handleClick = (index) => {
    if (!selectedCards.includes(index)) {
      setSelectedCards([index, ...selectedCards]);
    } else {
      setSelectedCards(selectedCards.filter((val) => val !== index));
    }
  };
  return (
    <div className="cardlist">
      <ul>
        {cardList.map((card, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleClick(index);
              }}
            >
              <Card card={card} selected={selectedCards.includes(index)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
