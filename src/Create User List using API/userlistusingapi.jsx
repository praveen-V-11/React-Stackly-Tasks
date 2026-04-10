import React, { useEffect, useState } from "react";

const UserList = () => {
  // State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch API using useEffect
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
    <div style={styles.container}>
      <h2>User List (API)</h2>

      {loading && <p>Loading...</p>}

     
      {error && <p style={{ color: "red" }}>{error}</p>}

      
      {!loading && !error && (
        <div style={styles.cardContainer}>
          {users.map((user) => (
            <div key={user.id} style={styles.card}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
};

export default UserList;