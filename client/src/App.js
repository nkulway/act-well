import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import { Route, Routes } from 'react-router';
import Activities from './pages/Activities';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
