import './App.css';
import React, { useState } from 'react';
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/DisplayUser/UserList";

function App() {
    let id = 0;
    const incrementCounter = () => {
        return id++;
    }

    const [users, setUsers] = useState([{"id": incrementCounter(), "name": "John", "age": 28}, {"id": incrementCounter(), "name": "Jane", "age": 29}]);


    const addUserHandler = (user) => {
        const newUsers = [...users, user];
        setUsers(newUsers);
    }
  return (
    <div className="App">
      <AddUser addUser={addUserHandler}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
