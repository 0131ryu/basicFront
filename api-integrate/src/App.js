import Users from "./Users";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
