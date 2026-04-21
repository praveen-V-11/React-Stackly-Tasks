import React from "react";
import { useState } from "react";
const Filteruserlist = () => {

    const users = [
    { id: 1, name: "Praveen", email: "praveen@gmail.com" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com" },
    { id: 3, name: "Anjali", email: "anjali@gmail.com" },
    { id: 4, name: "Kiran", email: "kiran@gmail.com" }
  ];

 
  const [search, setSearch] = useState("")
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
    return ( 
        <>
        <div className="container">
      <h2>User Search</h2>
      {/* Search Input */}
      <input 
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
      />

      {/* User List */}
      <div className="user-list">
        {filteredUsers.map((user) => (
          <div key={user.id} className="card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
        </>
     );
}
 
export default Filteruserlist;