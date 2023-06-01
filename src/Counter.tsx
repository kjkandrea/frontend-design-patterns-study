import {useState} from "react";

export const Counter = () => {
  const [count, increase, decrease] = useCount();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
  );
}

const useCount = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrease = () => {
    count > 0 && setCount(prevCount => prevCount - 1);
  };

  return [count, increase, decrease] as const
}
