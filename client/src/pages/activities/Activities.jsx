import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./activities.css";

function Activities() {


  const [newActivity, setNewActivity] = useState(null)

  const [name, setName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [average, setAverage] = useState("");
  const [activities, setActivities] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  //  when the page loads, if the user is logged in grab their activitt information based on their JWT token
  useEffect(() => {
    axios
      .get("/api/v1/activities", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        setActivities(res.data);
      });
  }, [token]);

  if (!token) {
    navigate("/login");
  }

//  Create a new activity related specifically to the user who is logged in, in the browser

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/v1/activities",
        { name, temperature, average },
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("You successfully added an activity!");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.error);
      });
  };


// PUT request to update user's activities as they please

  const handleUpdate = (e) => {
   e.preventDefault()
      const body = {
        id: newActivity.id,
        name: newActivity.name,
        temperature: newActivity.temperature,
        average: newActivity.average
      }
      axios.put(`/api/v1/activities/${newActivity.id}`, body, {
        headers: {
          "x-access-token": token,
        }})
          .then(res => console.log(res.message))
          .catch(err => console.log(err));
    }

    const handleClick = (clickedActivity) => {
      setNewActivity(clickedActivity)
    }


// DELETE request for the user to delete activities as they please

  const handleDelete = (e) => {
    let id = e.id;
    axios
      .delete(`api/v1/activities/` + id, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("You successfully deleted an activity!");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.error);
      });
    window.location.reload(false);
  };



  return (
    <div className="activity-container">
      <div className="heading">
        <Typography fontWeight="500" variant="h1">
          Your Activities
        </Typography>
      </div>
      {/* if there is a 'newActivity' */}
      { newActivity && (
       
          <form className="form" onSubmit={(e) => handleUpdate(e)}>
          <TextField
            type="text"
            id="name"
            onChange={(e) => setNewActivity({...newActivity, name: e.target.value})}
            value={newActivity.name}
            required
            label='Name'
          />
          <br />

          <TextField
            type="text"
            id="temperature"
            onChange={(e) => setNewActivity({...newActivity, temperature: e.target.value})}
            value={newActivity.temperature}
            required
            label='Temperature'
          />
          <br />

          <TextField
            type="text"
            id="average"
            onChange={(e) => setNewActivity({...newActivity, average: e.target.value})}
            value={newActivity.average}
            required
            label="Description"
          />
          <br />

          <Button type="submit" variant="contained">
            Update Activity
          </Button>
        </form>
      
      )}

      <Container >
        <Grid container spacing={3}>
          {activities.map((activity) => (
            <Grid item key={activity.id} xs={12} md={6} lg={4}>
              <Card onClick={() => handleClick(activity)} className="card" elevation={2}>
                <CardHeader
                  action={
                    <IconButton
                      onClick={() => {
                        handleDelete(activity);
                      }}
                    >
                      {<DeleteIcon />}
                    </IconButton>
                  }
                  title={activity.name}
                  subheader={activity.temperature}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {activity.average}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className="activity-form" >
        <Typography fontWeight="500" variant="h3">
          Add an activity of your own.
        </Typography>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <TextField
            autoComplete="off"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            label="Activity Name"
          />
          <br />

          <TextField
            autoComplete="off"
            type="text"
            id="temperature"
            onChange={(e) => setTemperature(e.target.value)}
            value={temperature}
            required
            label="Ideal Temperature"
          />
          <br />

          <TextField
            autoComplete="off"
            type="text"
            id="average"
            onChange={(e) => setAverage(e.target.value)}
            value={average}
            required
            label="Description"
          />
          <br />

          <Button type="submit" variant="contained">
            Create New Activity
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Activities;
