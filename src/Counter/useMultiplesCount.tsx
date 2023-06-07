import {useState} from "react";
import {CountModel} from "./Count";

export const useMultiplesCount = ({divisors}: { divisors: number }): CountModel => {
  const [count, setCount] = useState(0);

  const increase = () =>
    setCount(prevCount => prevCount + divisors);
  const decrease = () =>
    count >= divisors && setCount(prevCount => prevCount - divisors);


  return {count, increase, decrease}
}
