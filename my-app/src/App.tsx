import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Import Pages (Components)
import Home from './Home';  // Default import for Home component
import Login from './components/login';  // Default import for Login component
import Profile from './components/profile';  // Default import for Profile component
import Sessions from './components/sessions';  // Default import for Sessions component


import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>

        {/* Navigation Bar */}
        <nav>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/profile">Profile</a>
          <a href="/sessions">Sessions</a>
        </nav>

        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sessions" element={<Sessions />} />
        </Routes>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </Router>
  );
}

export default App;
