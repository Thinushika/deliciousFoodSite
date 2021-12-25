import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/index'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
