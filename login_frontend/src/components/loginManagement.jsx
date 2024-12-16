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


    
  }


}
