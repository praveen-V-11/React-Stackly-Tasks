import React, { useState } from "react";

const UserSearch = () => {

  const users = ["Cart", "Bike", "Car", "Bus", "Cycle", "Train"];

 
  const [search, setSearch] = useState("");

 
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>User Search</h2>

      
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      
      <ul style={styles.list}>
        {filteredUsers.map((user, index) => (
          <li key={index} style={styles.item}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};


const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  input: {
    padding: "10px",
    width: "200px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid gray",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    padding: "8px",
    fontSize: "18px",
  },
};

export default UserSearch;