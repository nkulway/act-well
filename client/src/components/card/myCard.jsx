import axios from "axios";
import { Card, IconButton, Typography } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Checkbox } from "@mui/material";
import React from "react";

function Warm({ activity }) {
	const token = localStorage.getItem('token')

	// add activity to user profile by checking box on card
	// utilizing axios for HTTP requests
const handleClick = (e) => {
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



// card template to be displayed after quiz
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