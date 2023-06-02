import {CountModel} from "src/Counter/Count";

export const CounterView = ({ count, increase, decrease }: CountModel) => (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
);
