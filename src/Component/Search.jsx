import React, { useContext, useState, useEffect, useRef } from 'react';
import { RecipeContext } from '../Context/RecipeContext';
import { Container, Row, Col } from 'reactstrap';
import { fetchRecipe } from '../Service/Service';
import RecipeList from './RecipeList';

const Search = () => {
  const { isLoading,setIsLoading, recipes, setRecipes, favorites, setFavorites, showComment, setShowComment } = useContext(RecipeContext);
  const [query, setQuery] = useState('pizza');
  const [error, setError] = useState('');
 

  const inputRef = useRef(null);

  

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    setIsLoading(true);
    try {
      const data = await fetchRecipe(query);
      setRecipes(data);
      setError('');
      setShowComment(new Array(data.length).fill(false));
    } catch (error) {
      setError('Error fetching recipes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch();
  };

  

 
  return (
    <div className='search-recipe'>
      <div className="search-recipe__main-heading text-center">
        <h4 className='text-black font-bold text-[1.2em] my-10 pb-3 border-b-2 border-red-600 inline-block'>Search Recipe</h4>
      </div>
      <Container>
        <div className="search-form d-flex justify-content-center mt-2 mb-[60px]">
          <form onSubmit={handleSubmit} className='flex items-center justify-center w-[80%]'>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for recipes..."
              className="rounded-l-lg w-[80%] p-2"
              ref={inputRef}
              style={{ outline: '1px solid black' }}
            />
            <button
              type="submit"
              onClick={handleFocus}
              className="ri-search-2-line pointer-events-auto text-xl bg-red-700 text-white p-2 rounded-r-lg"
            ></button>
          </form>
        </div>
        <RecipeList/>

      
      </Container>
    </div>
  );
};

export default Search;

