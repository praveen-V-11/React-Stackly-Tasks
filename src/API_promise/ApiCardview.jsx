import React, { useEffect, useState } from "react";
import "../styles/cards.css"

function Cards() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>User Cards</h1>

      <div className="wrapper">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;