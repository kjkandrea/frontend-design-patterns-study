import {useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };
  const onDecrease = () => {
    count > 0 && setCount(prevCount => prevCount - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}>Increment</button>
      <button onClick={onDecrease}>Decrement</button>
    </>
  );
}
