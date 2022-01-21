import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user_name, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/v1/users/register', { user_name, email, password })
      .then(res => {
        console.log(res.data)
        alert('Registered successfully')
        navigate('/login')
      })
      .catch(err => {
        console.log(err.response)
        alert(err.response.data.error)
      })
  }

  return (
  <div>
    <h1>Register</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="user_name">User Name</label><br />
        <input type="text" id="user_name" 
        onChange={(e) => setUsername(e.target.value)} 
        value={user_name}
        required/>
      </p>
      <p>
        <label htmlFor="email">Email</label><br />
        <input type="email" id="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        required/>
      </p>
      <p>
        <label htmlFor="password">Password</label><br />
        <input type="text" id="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        required/>
      </p>
      <button tyoe="submit">Register</button>
    </form>
  </div>
  );
};

export default Register;