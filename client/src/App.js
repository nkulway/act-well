import Activities from './pages/Activities';
import Amusement from './pages/Amusement';
import './App.css';
import Exercise from './pages/Exercise';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Quiz from './pages/Quiz';
import Register from './pages/Register';
import { Route, Routes } from 'react-router';
import Relaxation from './pages/Relaxation';
import Activity from './pages/activity'

function App() {
  return (
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
  );
}

export default App;
