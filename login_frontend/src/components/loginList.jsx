import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoginList() {
    const [login, setLogin] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
          .then(response => {
            setLogin(response.data);
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
      }, []);
    
      return (
        <div>
          <h2>Login List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
              {login.map(login => (
                <tr key={login.id}>
                  <td>{login.id}</td>
                  <td>{login.firstName}</td>
                  <td>{login.lastName}</td>
                  <td>{login.email} </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    
    export default LoginList;