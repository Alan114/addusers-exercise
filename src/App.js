import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userName, age) => {
    setUsers(prevState => {
      return [...prevState, { name: userName, age: age, id: Math.random() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
