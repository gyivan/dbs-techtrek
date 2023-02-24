import './App.css';
import axios from 'axios';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import AppContent from './components/AppContent';

function App() {

  const [error, setError] = useState(null)

  //Login functionality
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const res = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password
        }, {headers: {
          'Authorization': 'Basic ' + btoa('admin:secret'),
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        mode: 'cors'})

        if (res.status === 200) {
          setIsLoggedIn(true)
        } else {
          setError(true)
        }

    } catch (error) {
      setError(true)
    }

  }

  return (
    <div>
      { isLoggedIn ? (
        // if isLoggedIn is true, display main content
        <AppContent />
      ) : (
        // if isLoggedIn is false, display Login Page
        <LoginPage 
        username={username}
        password={password}
        error={error}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        handleLogin={handleLogin} />
      )
      }
    </div>
  );
}

export default App;
