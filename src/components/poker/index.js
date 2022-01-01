import "./poker.css";

import Controls from "./components/controls";
import Cards from "./components/cards";

export default function Poker() {
  return (
    <div className="poker">
      <Cards cardList={["card1", "card2", "card3", "card4", "card5"]} />
      <Controls />
    </div>
  );
}
