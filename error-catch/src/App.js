import React from "react";
import Users from "./Users";
import ErrorBoundary from "../ErrorBoundary";

function App() {
  const user = {
    id: 1,
    username: "jihye",
  };
  return (
    <ErrorBoundary>
      <Users user={user} />
    </ErrorBoundary>
  );
}

export default App;
