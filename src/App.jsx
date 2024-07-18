import React, { useState } from 'react'
import Login from './components/Login'
import WeatherApp from './components/WeatherApp'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Username: Loonslab
  // Password: labloons

  return (
    <div className="App">
      {isLoggedIn ? (
        <WeatherApp />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App