"use strict";
import { useState } from 'react';

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form 
      onSubmit={(e) => handleSubmit(e, email, password)}
      style={{ backgroundColor: '#D6E4FF' }} // Change form color here
    >
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required 
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required 
        />
      </label>
      <button 
        className="btn-primary"
        style={{ backgroundColor: '1D3557' }} // Change button color here
      >
        Submit
      </button>
    </form>
  );
}