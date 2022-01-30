import React from "react";
import { Card, IconButton, Typography } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Checkbox } from "@mui/material";
import axios from "axios";

function Warm({ activity }) {
	// const [name, setName] = useState('')
	// const [temperature, setTemperature] = useState('')
	// const [average, setAverage] = useState('')
	const token = localStorage.getItem('token')

const handleClick = (e) => {
	// e.preventDefault()
	// setName(e.activity)
	// setTemperature(e.category)
	// setAverage(e.details)
	axios.post('/api/v1/activities', { name: e.activity, temperature: e.category, average: e.details }, {
		headers: {
			'x-access-token': token
		}
		})
		.then(res => {
			console.log(res.data)
			alert('You successfully added an activity!')
		})
		.catch(err => {
			console.log(err.response)
			alert(err.response.data.error)
		})
}

// console.log(name)
// console.log(temperature)
// console.log(average)

		return(
     <div>
			 <Card className="card" elevation={2}>
				 <CardHeader
				 		action={
							 <IconButton  onClick={() => handleClick(activity)} >
								 {<Checkbox />}
							 </IconButton>
						 }
						 title={activity.activity}
						 subheader={activity.category}
				  />
					<CardContent>
						<Typography variant="body2" color="textSecondary">
							{activity.details}
						</Typography>
					</CardContent>
			 </Card>
		 </div>
		)
	}


  export default Warm;