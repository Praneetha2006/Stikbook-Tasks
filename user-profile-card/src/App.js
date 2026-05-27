import React, { useState } from "react";
import UserProfile from "./components/userProfile";
import usersData from "./utils/usersData";
import "./App.css";

function App() {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  };

  return (
    <div className="app">
      <h1>User Profile Cards</h1>

      <div className="card-container">
        {users.map((user) => (
          <UserProfile
            key={user.id}
            id={user.id}
            name={user.name}
            jobTitle={user.jobTitle}
            company={user.company}
            email={user.email}
            phone={user.phone}
            onDelete={deleteUser}
          />
        ))}
      </div>
    </div>
  );
}

export default App;