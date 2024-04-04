export default function Feedback({
  value: { good, neutral, bad },
  totalValue,
  percentCalc,
}) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalValue}</p>
      <p>Positive: {percentCalc}%</p>
    </>
  );
}
