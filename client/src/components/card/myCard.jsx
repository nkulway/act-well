import React, { useState } from "react";
import { Card, IconButton, Typography } from "@material-ui/core";
import { CardHeader } from "@mui/material";
import { CardContent } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import axios from "axios";

function Warm({ activity }) {

	const [name, setName] = useState([])
	const token = localStorage.getItem('token')

// 	const handleClick = (card) => {
//     setName([...name, card.activity])
// }

const handleClick = (e) => {
	// e.preventDefault()
	setName([...name, e.activity])
	axios.post('/api/v1/activities', { name }, {
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

console.log(name)

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