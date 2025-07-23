
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

function Header() {
  const { isLoggedIn, username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Gupio Store</Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Products</Link>
        {isLoggedIn && <Link to="/favourites" className="hover:underline">Favourites</Link>}
        {!isLoggedIn ? (
          <Link to="/login" className="hover:underline">Login</Link>
        ) : (
          <>
            <span className="text-sm">Hi, {username}</span>
            <button onClick={handleLogout} className="ml-2 underline hover:text-red-300">Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
