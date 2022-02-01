import Computer from '../../computer.svg'
import Header from '../../header-final.svg'
import { Link, Typography } from '@mui/material';
import './home.css'
import Login from '../login/Login';

const Home = () => {

  

  
  return (
    <>
    <div className="header-svg">
    <img src={Header} alt="header img" />
    </div>
    <div className="home-container">
      <div className="register">
        <Typography fontWeight="500" variant="h3">Act with ease</Typography>
        <div className="paragraph-txt">
          <Typography fontWeight="400" variant="p">ActWell is your source for discovering and organizing healthy activities curated just for you, by cutting out the time it takes for you to figure out what you truly want to do.</Typography><br/>
          <Link href="/register" underline="hover">
              {'Register now!'}
          </Link>
        </div>
        <Login />
      </div>
      <div className="computer-img">
        <img src={Computer} alt="computer-img" />
      </div>
    </div>
    <div className="description-container">
      <div className="description">
        <Typography fontWeight="500" variant="h3">
          Want to know more about us?
        </Typography><br />
        <Typography fontWeight="500" variant="p">
        ActWell tackles boredom and empty schedules in a fun and simple way by providing a collection of healthy activities for the user to partake in.  After the user creates their personal account, they are prompted with a simple questionnaire to gauge their activity level and general mood for the day.  Before any questions are answered the user is asked to provide their location allowing the app to determine the weather.  After the user has entered their location and answered the three questions a collection of activities will be organized and presented on the screen.  The app takes the average of the answers and the current weather to determine which activities will best suit the user.  From there the user can save these to their favorites page.  On their favorites page, the user is able to create new activities of their own and delete the activities as they finish them. 
        </Typography>
      </div>
    </div>
    </>
  )
}

export default Home;