import React from 'react';
import Home from '../Page/Home';
import Liked from '../Page/Liked';
import Favourite from '../Page/Favorite';
import Signin from '../Page/Signin';
import RecipeDetail from '../Page/RecipeDetail';
import { Routes, Route, Navigate } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
};

export default Router;

