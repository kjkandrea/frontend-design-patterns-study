import {useSingleCount} from "./useSingleCount";

export const Counter = () => {
  const { count, increase, decrease } = useSingleCount();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
  );
}
