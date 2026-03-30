
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
      setLoading(false);
    }

    getUsers();
  }, []);

  return (
    <div>
        <h1>Api Searching</h1>
      {loading ? <h2>Loading...</h2> : users.map(u => (
        <p key={u.id}Username>{u.firstName}</p>
      ))}
    </div>
  );
}

export default Users;