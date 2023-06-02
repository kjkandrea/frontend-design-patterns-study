import './App.css'
import {Counter} from "./Counter/Counter";
import {WithSingleCount} from "./Counter/Withs";

const SingleCounter = WithSingleCount(Counter);

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
      </section>
    </main>
  )
}

export default App
