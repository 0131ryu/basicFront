import React from "react";
// import colorData from "./color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
// import { v4 } from "uuid";

function App() {
  return (
    <div>
      <AddColorForm />
      <ColorList />
    </div>
  );
}

export default App;
