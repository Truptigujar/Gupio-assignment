import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './features/products/ProductList';
import ProductDetail from './features/products/ProductDetail';
import Favourites from './features/favourites/Favourites';
import Login from './features/auth/Login';
import Header from './components/Header';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="min-h-screen bg-[#fdf6e3]">
      <Header />
      <Routes>
        {/*  Home route shows ProductList only if logged in */}
        <Route
          path="/"
          element={isLoggedIn ? <ProductList /> : <Navigate to="/login" />}
        />

        {/*  Product detail route */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/*  Favourites is also protected */}
        <Route
          path="/favourites"
          element={isLoggedIn ? <Favourites /> : <Navigate to="/login" />}
        />

        {/*  Login page only shows if not logged in */}
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
