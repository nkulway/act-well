import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Activities() {
  const [activities, setActivitise] = useState([])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/api/v1/activities', {
      headers: {
        'x-access-token': token
      }
    })
      .then(res => {
        setActivitise(res.data)
      })
  }, [token])

  if (!token) {
    navigate('/login')
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
  </div>
  )
}

export default Activities;
