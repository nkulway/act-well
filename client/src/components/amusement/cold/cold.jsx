import coldActivities from '../../../utils/amusement/coldActivities'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import MyCard from "../../card/myCard";
import React from "react";

function CardCold() {
		return(
			<>
			<Container>
				<Grid container spacing={3}>
					{coldActivities.map(activity => (
						<Grid item key={activity.id} xs={12} md={6} lg={4}>
							{/* <Paper>{activity.activity}</Paper> */}
							<MyCard activity={activity} />
						</Grid>
					))}
				</Grid>
			</Container>
		 </>
		)
	}

  export default CardCold;