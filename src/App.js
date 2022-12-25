import './App.css';
import React, { useState } from 'react';
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/DisplayUser/UserList";

function App() {
    const [users, setUsers] = useState([{"id": "John" + Math.random()*100, "name": "John", "age": 28}, {"id": "Jane" + Math.random()*100, "name": "Jane", "age": 29}]);

    const addUserHandler = (user) => {
        const newUsers = [...users, {"id": user.name + Math.random()*100, "name": user.name, "age": user.age}];
        setUsers(newUsers);
    }
  return (
    <React.Fragment>
      <AddUser addUser={addUserHandler}></AddUser>
      <UserList users={users}></UserList>
    </React.Fragment>
  );
}

export default App;
