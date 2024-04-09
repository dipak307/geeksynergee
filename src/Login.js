import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

function Login({ onLogin }) {
  const [loginData, setLoginData] = useState({
    name: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.name === loginData.name && userData.password === loginData.password) {
      onLogin(true);
      navigate("/");
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={loginData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={loginData.password} onChange={handleChange} required />
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account <a href='/signup'>Sign Up</a> </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
