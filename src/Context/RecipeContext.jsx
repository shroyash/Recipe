import React, { createContext, useState, useEffect } from 'react';


export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [showComment, setShowComment] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites'); 
    return storedFavorites ? JSON.parse(storedFavorites) : {};
  });


  return (
    <RecipeContext.Provider value={{isLoading,setIsLoading, recipes, setRecipes, favorites, setFavorites,showComment,setShowComment }}>
      {children}
    </RecipeContext.Provider>
  );
};
