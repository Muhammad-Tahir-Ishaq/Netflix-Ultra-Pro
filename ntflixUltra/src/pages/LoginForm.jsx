// src/components/LoginForm.js
import { useState } from 'react';


import '../styles/loginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form className='apni-max-height' >
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

