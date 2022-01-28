import React from "react";
import { Card, IconButton, Typography } from "@material-ui/core";
import { CardHeader } from "@mui/material";
import { CardContent } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

function Warm({ activity }) {

		return(
     <div>
			 <Card className="card" elevation={2}>
				 <CardHeader
				 		action={
							 <IconButton >
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