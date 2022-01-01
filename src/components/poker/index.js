import "./poker.css";

import Balance from "./components/balance";
import Cards from "./components/cards";
import Controls from "./components/controls";

export default function Poker() {
  return (
    <div className="poker">
      <Balance credits={100} denom={25} />
      <Cards cardList={["AD", "TC", "3H", "9S", "KC"]} />
      <Controls />
    </div>
  );
}
