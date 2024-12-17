import React, { useState, useEffect } from "react";
import axios from "axios";

function LoginManagement() {
  const [logins, setLogins] = useState([]);
  const [editLogin, setEditLogin] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/logins")
      .then((response) => {
        setLogins(response.data);
      })

      .catch((err) => {
        setError("Error getting logins");
        console.error(err);
      });
  }, []);


  const handleEdit = (login) => {
    setEditLogin(login);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!editLogin) return; 

    axios
    .put(`http://localhost:8080/logins/${editLogin.id}`, editLogin)
    .then((response) => {
      setLogins(logins.map(login => login.id === editLogin.id ? response.data : login));
      setError("");
      })
      .catch((err) => {
        setError("Error updating login");
        console.error(err);
      });
  };
    // Handle deleting a login
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/logins/${id}`)
      .then(() => {
        setLogins(logins.filter(login => login.id !== id));
        setError("");
      })
      .catch((err) => {
        setError("Error deleting login");
        console.error(err);
      });
  };

  // Handle adding a new login
  const handleAdd = (e) => {
    e.preventDefault();
    
    if (!newLogin.username || !newLogin.password) {
      setError("Username and password are required");
      return;
    }

    axios
      .post("http://localhost:8080/logins", newLogin)
      .then((response) => {
        setLogins([...logins, response.data]);
        setNewLogin({ username: '', password: '' });
        setError("");
      })
      .catch((err) => {
        setError("Error adding login");
        console.error(err);
      });
  };


    }
