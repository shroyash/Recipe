import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const FoodDetail = ({ recipe, handleClose }) => {
  if (!recipe) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div>
      <Container className='relative'>
        <div className="bg-white absolute shadow-lg rounded-lg mx-auto max-w-7xl px-4 py-6 mt-8 w-full">
          <Row>
            <button onClick={handleClose} className='text-right text-2xl -mt-3'>
              <i className="ri-close-circle-fill"></i>
            </button>
            <Col lg='1' sm='1'></Col>
            <Col lg='4' sm='4'>
              <div className="border-2 border-green-700 rounded-lg transform -rotate-6 h-[400px] w-full relative">
                <div className="absolute inset-0 flex justify-center items-center flex-row">
                  <img src={recipe.image} alt={recipe.label} className="rounded-lg w-[310px] mt-1 rotate-3 h-[390px]" />
                </div>
              </div>
              <h6 className='mt-4 text-xl ml-[100px]'>{recipe.label}</h6>
            </Col>
            <Col lg='6' sm='6'>
              <h6 className="text-[1.2em] ml-8 font-bold mt-3 mb-4">RECIPE DETAILS</h6>
              <ul className="mb-4 list-disc pl-4 ml-5">
                <li className="text-[0.9rem] font-bold">Calories: {Math.round(recipe.calories)}</li>
                <li className="text-[0.9rem] font-bold">Yield: {recipe.yield}</li>
                <li className="text-[0.9rem] font-bold">Cuisine Type: {recipe.cuisineType?.join(', ')}</li>
                <li className="text-[0.9rem] font-bold">Dish Type: {recipe.dishType?.join(', ')}</li>
                <li className="text-[0.9rem] font-bold">Meal Type: {recipe.mealType?.join(', ')}</li>
              </ul>
            </Col>
            <Col lg='1' sm='1'></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default FoodDetail;

