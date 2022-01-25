import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import { Route, Routes } from 'react-router';
import Activities from './pages/Activities';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
