import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./activities.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

function Activities() {
  
  const [name, setName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [average, setAverage] = useState("");
  const [activities, setActivities] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.error);
      });
  };

  const handleDelete = (e) => {
    let id = e.id
    axios
      .delete(
        `api/v1/activities/`+id,
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("You successfully deleted an activity!");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.error);
      });
  };


  return (
    <div className="activity-container">
      <div className="heading">
        <Typography fontWeight="500" variant="h1">
          Your Activities
        </Typography>
      </div>
      <Container>
        <Grid container spacing={3}>
          {activities.map((activity) => (
            <Grid item key={activity.id} xs={12} md={6} lg={4}>
              {/* <Paper>{activity.activity}</Paper> */}
              <Card className="card" elevation={2}>
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
      <div className="activity-form">
        <Typography fontWeight="500" variant="h3">
          Add an activity of your own.
        </Typography>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <TextField
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            label="Activity Name"
          />
          <br />

          <TextField
            type="text"
            id="temperature"
            onChange={(e) => setTemperature(e.target.value)}
            value={temperature}
            required
            label="Ideal Temperature"
          />
          <br />

          <TextField
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
