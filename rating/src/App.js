import StarRating from "./StarRating";

function App() {
  return (
    <div>
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={(e) => alert("double click")}
      />
    </div>
  );
}

export default App;
