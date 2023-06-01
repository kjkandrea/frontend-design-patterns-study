import {useCount} from "./useCount";

export const Counter = () => {
  const { count, increase, decrease } = useCount();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
  );
}
