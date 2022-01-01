export default function Balance({ credits, denom }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const value = formatter.format((credits * denom) / 100);
  return (
    <div className="balance">
      <p>
        Credits: <strong>{credits}</strong>
      </p>
      <p>
        Value: <strong>{value}</strong>
      </p>
    </div>
  );
}
