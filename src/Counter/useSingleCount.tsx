import {useState} from "react";
import {CountModel} from "./Count";

export const useSingleCount = (): CountModel => {
  const [count, setCount] = useState(0);

  const increase = () =>
    setCount(prevCount => prevCount + 1);

  const decrease = () =>
    count > 0 && setCount(prevCount => prevCount - 1);


  return {count, increase, decrease}
}
