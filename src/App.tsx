import './App.css'
import {Counter} from "./Counter/Counter";
import {CounterView} from "./Counter/CounterView";
import {WithSingleCount, WithMultiplesCount} from "./Counter/Withs";

const SingleCounter = WithSingleCount(CounterView);
const MultipleOfTwoCounter = WithMultiplesCount(CounterView, {divisors: 2});
const MultipleOfFiveCounter = WithMultiplesCount(CounterView, {divisors: 5});

function App() {
  return (
    <main>
      <section>
        <h2>All In One Counter Component</h2>
        <Counter/>
      </section>
      <section>
        <h2>Dependency Injectable Counter Component</h2>
        <h3>Single Counter</h3>
        <SingleCounter/>
        <h3>Multiple Of Two Counter</h3>
        <MultipleOfTwoCounter/>
        <h3>Multiple Of Five Counter</h3>
        <MultipleOfFiveCounter/>
      </section>
    </main>
  )
}

export default App
