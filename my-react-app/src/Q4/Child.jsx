export default function Child({ change }) {
  return (
    <div>
      <h1>From Child</h1>
      <button onClick={change}>Change Message</button>
    </div>
  );
}
