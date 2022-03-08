import axios from 'axios'
import { Button } from '@mui/material';
import { logInUser } from '../../redux/actions/actions';
import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './login.css'


const Login = () => {
  const dispatch = useDispatch()
  const [user_name, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // handle HTTP request from backend with axios 
  const handleSubmit = (e) => {
    e.preventDefault()
    // send correct user information to backend 
    axios.post('/api/v1/users/login', { user_name, email, password })
      .then(res => {
        console.log(res.data)
        dispatch(logInUser(res.data.token))
        navigate('/quiz')
      })
      .catch(err => {
        console.log(err.response)
        alert(err.response.data.error)
      })
  }

  return (
  <div className="login-form">
    <h1>Login</h1>
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
          
          <TextField type="text" id="outlined-basic" 
          onChange={(e) => setUsername(e.target.value)} 
          value={user_name}
          autoComplete="off"
          required
          label="User Name"
          variant="outlined"/><br/>
        
          <TextField  type="email"  id="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          autoComplete="off"
          required
          label="Email"
          variant="outlined"
          /><br/>
        
          <TextField type="password" id="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
          required
          label="Password"
          variant="outlined"
          /><br/>
        
        <Button type="submit" variant="contained">Login</Button>
      </form>
    </div>
  </div>
  );
};

export default Login;
