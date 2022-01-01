export default function Cards({ cardList }) {
  return (
    <div>
      <ul>
        {cardList.map((card) => {
          return <li>{card}</li>;
        })}
      </ul>
    </div>
  );
}
