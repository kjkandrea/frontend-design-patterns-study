import {ComponentType} from "react";
import {CountModel} from "./Count";
import {useSingleCount} from "./useSingleCount";
import {useMultiplesCount} from "./useMultiplesCount";

export const WithSingleCount = (CounterView: ComponentType< CountModel >) => {
  return function CounterWrapper() {
    return <CounterView {...useSingleCount()} />
  }
}

export const WithMultiplesCount = (CounterView: ComponentType<CountModel>, args: Parameters<typeof useMultiplesCount>[0]) => {
  return function CounterWrapper() {
    const count = useMultiplesCount(args);
    return <CounterView {...count} />
  }
}

