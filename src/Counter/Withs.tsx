import {ComponentType} from "react";
import {CountModel} from "./Count";
import {useSingleCount} from "./useSingleCount";

export const WithSingleCount = (CounterView: ComponentType<{ props: CountModel }>) => {
  return function CounterWrapper() {
    return <CounterView {...useSingleCount()} />
  }
}
