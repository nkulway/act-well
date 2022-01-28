import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Activities() {
  const [name, setName] = useState('')
  const [temperature, setTemperature] = useState('')
  const [average, setAverage] = useState('')
  const [activities, setActivities] = useState([])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/api/v1/activities', {
      headers: {
        'x-access-token': token
      }
    })
      .then(res => {
        setActivities(res.data)
      })
  }, [token])

  if (!token) {
    navigate('/login')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/v1/activities', { name, temperature, average }, {
      headers: {
        'x-access-token': token
      }
      })
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
    <h1>Activities</h1>
    {activities.map(activity => (
      <div key={activity.id}>
        <h2>{activity.name}</h2>
        <p>{activity.temperature}</p>
        <p>{activity.average}</p>
      </div>
    ))}
    <div>
    <h1>Activity</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="name">Activity Name</label><br />
        <input type="text" id="name" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        required/>
      </p>
      <p>
        <label htmlFor="temperature">Temperature</label><br />
        <input type="text" id="temperature" 
        onChange={(e) => setTemperature(e.target.value)} 
        value={temperature}
        required/>
      </p>
      <p>
        <label htmlFor="average">Average</label><br />
        <input type="text" id="average" 
        onChange={(e) => setAverage(e.target.value)} 
        value={average}
        required/>
      </p>
      <button tyoe="submit">Register</button>
    </form>
  </div>
  </div>
  
  )
}

export default Activities;
