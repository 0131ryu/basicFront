import Hello from "./Hello";
import Wrapper from "./Wrapper";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper>
      <Counter />
    </div>
  );
}

export default App;
