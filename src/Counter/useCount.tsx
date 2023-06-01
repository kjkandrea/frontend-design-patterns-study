import {useState} from "react";
import {Count} from "./Count";

export const useCount = (): Count => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrease = () => {
    count > 0 && setCount(prevCount => prevCount - 1);
  };

  return { count, increase, decrease }
}
