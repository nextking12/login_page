import React, { useState } from "react";
import axios from "axios";

function CreateLogin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLogin = {
      firstName,
      lastName,
      email,
      admin,
    };

    axios
      .post("http://localhost:8080/login", newLogin)
      .then((response) => {
        alert("Login created successfully!");
        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setAdmin(false);
      })
      .catch((error) => {
        console.error("Error creating login:", error);
        alert("Error creating login");
      });
  };

  return (
    <div>
      <h2>Create New Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Admin?:</label>
          <input
            type="checkbox"
            checked={admin}
            onChange={(e) => setAdmin(e.target.checked)}
          />
        </div>
        <button type="submit">Create Login</button>
      </form>
    </div>
  );
}

export default CreateLogin;