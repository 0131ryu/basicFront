import Hello from "./Hello";
import Wrapper from "./Wrapper";
import "./App.css";
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper>
      <Counter />
      <InputSample />
    </div>
  );
}

export default App;
