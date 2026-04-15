import React, { useEffect, useState } from "react";
import "../styles/userapi.css"
const UsersAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2>User List (API)</h2>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p className="error">{error}</p>}

      {/* Data */}
      {!loading && !error && (
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersAPI;