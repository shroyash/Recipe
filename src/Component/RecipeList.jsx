import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import Comment from './Comment';
import { RecipeContext } from '../Context/RecipeContext';
import RecipeDetail from '../Page/RecipeDetail';

const RecipeList = () => {
    const { isLoading, recipes, favorites, setFavorites, showComment, setShowComment } = useContext(RecipeContext);
    const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);
    const [showRecipeDetail, setShowRecipeDetail] = useState(false);

    const handleShowDetail = (index) => {
        setSelectedRecipeIndex(index);
        setShowRecipeDetail(true);
    };

    const handleCloseDetail = () => {
        setShowRecipeDetail(false);
        setSelectedRecipeIndex(null);
    };

    const handleFavorite = (index) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = {
                ...prevFavorites,
                [index]: !prevFavorites[index]
            };
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    const handleToggleComment = (index) => {
        setShowComment((prevShowComment) => {
            const updatedShowComment = [...prevShowComment];
            updatedShowComment[index] = !updatedShowComment[index];
            console.log('Updated showComment:', updatedShowComment); // Debugging log
            return updatedShowComment;
        });
    };

    return (
        <div>
            <Container>
                {isLoading ? (
                    <div className="text-center">
                        <div className="noresult flex items-center justify-center flex-col">
                            <FaSpinner className="animate-spin text-red-700 text-3xl" />
                            <h2>Loading...</h2>
                        </div>
                    </div>
                ) : (
                    <>
                        {showRecipeDetail && selectedRecipeIndex !== null && (
                            <RecipeDetail
                                recipe={recipes[selectedRecipeIndex].recipe}
                                handleClose={handleCloseDetail}
                            />
                        )}
                        <Row>
                            {recipes.map((recipe, index) => (
                                <Col lg='3' md='4' sm='6' xs='12' className="mb-5" key={index}>
                                    <div className="recipe-item bg-white shadow-lg rounded-md overflow-hidden">
                                        <img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full h-60 object-cover" />
                                        <div className="p-2 text-center">
                                            <div className="overflow-hidden">
                                                <h5 className="text-xl font-semibold whitespace-nowrap">
                                                    {recipe.recipe.label}
                                                </h5>
                                            </div>
                                            <div className="btn-recipe flex">
                                                <button onClick={() => handleShowDetail(index)} className='no-underline text-[0.5em] btn btn-danger mt-2 mx-1'>Get Recipe</button>
                                                <Link to='/' className='no-underline text-[0.5em] btn btn-danger mt-2 mx-1'>Food Detail</Link>
                                            </div>
                                            <div className="icon flex justify-center mt-3">
                                                <button className='-mt-2 mx-1 text-xl' onClick={() => handleFavorite(index)}>
                                                    <i className={favorites[index] ? "ri-heart-fill text-red-600" : "ri-heart-line"}></i>
                                                </button>
                                                <p className="text-xs font-semibold mt-2">Mark as Favourite</p>
                                                <button type='button' onClick={() => handleToggleComment(index)}>
                                                    <i className="ri-chat-1-line ml-4 mr-1 text-[1.3em]"></i>
                                                </button>
                                                <p className="text-xs font-semibold mt-2">Comment</p>
                                            </div>
                                            {showComment[index] && <Comment index={index} handleCloseComment={handleToggleComment} />}
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
};

export default RecipeList;
