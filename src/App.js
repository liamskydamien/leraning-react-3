import './App.css';
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/DisplayUser/UserList";

function App() {
    const users = [{"id": 1, "name": "John", "age": 28}, {"id": 2, "name": "Jane", "age": 29}];
  return (
    <div className="App">
      <AddUser></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
