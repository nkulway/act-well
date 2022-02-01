import Activity from './pages/activities/activityCard'
import Activities from './pages/activities/Activities';
import Amusement from './pages/amusement/Amusement';
import './App.css';
import { checkUser } from './redux/actions/actions'
import Exercise from './pages/exercise/Exercise';
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NavBar from './components/nabBar/NavBar';
import Quiz from './pages/quiz/Quiz';
import Register from './pages/register/Register';
import { Route, Routes } from 'react-router';
import Relaxation from './pages/relaxation/Relaxation';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  
  return (
    <>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/amusement" element={<Amusement />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/register" element={<Register />} />
        <Route path="/relaxation" element={<Relaxation />} />
      </Routes>
    </div>
    <div className="push">
      <Footer />
      </div>
      </>
  );
}

export default App;
