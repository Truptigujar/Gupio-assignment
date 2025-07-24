import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login(username));
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6e3]">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

