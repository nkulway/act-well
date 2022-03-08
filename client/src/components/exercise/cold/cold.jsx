import coldActivities from '../../../utils/exercise/coldActivities'
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
							{/* use card component dynamically inside of container */}
							<MyCard activity={activity} />
						</Grid>
					))}
				</Grid>
			</Container>
		 </>
		)
	}

  export default CardCold;