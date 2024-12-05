import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import App from "../App";

import './Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Form the request body
      const requestBody = {
        username: username,
        password: password,
      };
  
      // Send POST request to the backend API
      const response = await axios.post('http://localhost:3000/api/login', requestBody);
  
      // Check for success in the response
      if (response.data.success) {
        localStorage.setItem("token", response.data.token); 
        setLogin(true);
      } else {
        console.log('Authentication failed. Please check your username and password.');
        window.alert("Authentication failed. Please check your username and password.");
      }
    } catch (err) {
      console.log('An error occurred. Please try again later.');
      window.alert("Authentication failed. Please check your username and password.");
    }
  };
  if (login){
    return (
      <App/>
    );
  } else {
    return (
      <div className="login-page">
      <div className="login-card">
        <main>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Login</button>
          </form>
        </main>
      </div>
    </div>
    );
  }
  }
  
  export default Login;