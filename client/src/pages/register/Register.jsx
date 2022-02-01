import axios from 'axios'
import { Button, TextField } from '@mui/material';
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
        navigate('/')
        window.location.reload(false)
      })
      .catch(err => {
        console.log(err.response)
        alert(err.response.data.error)
      })
  }

  return (
  <div className="login-form">
    <h1>Register</h1>
    <form className="form" onSubmit={(e) => handleSubmit(e)}>

        <TextField type="text" id="user_name" 
        autoComplete="off"
        onChange={(e) => setUsername(e.target.value)} 
        value={user_name}
        required
        label="User Name"
        /><br/>

        <TextField type="email" id="email" 
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        required
        label="Email"
        /><br/>
    
        <TextField type="password" id="password" 
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        required
        label="Password"
        /><br/>
     
     <Button type="submit" variant="contained">Register</Button>
    </form>
  </div>
  );
};

export default Register;
