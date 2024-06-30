// import React, { useState, useEffect } from 'react';
// import { Container, Col, Row } from 'reactstrap';
// import { popularRecipeFetch } from '../Service/Service';

// const Popular = () => {
//     const popularFood = [
//         'pizza', 'burger', 'cake', 'sandwich', 'momo', 'chicken', 'hotwing', 'keema noodle', 'fried rice'
//     ];
//     const [data, setData] = useState({});
//     const [error, setError] = useState(null);

//     const fetchPopularData = async () => {
//         try {
//             const fetchedData = {};
//             for (const item of popularFood) {
//                 const result = await popularRecipeFetch(item);
//                 if (result.hits) {
//                     fetchedData[item] = result.hits;
//                 } else {
//                     console.error(`No hits found for ${item}`);
//                 }
//             }
//             setData(fetchedData);
//         } catch (err) {
//             console.error('Error fetching data:', err);
//             setError('Failed to fetch popular recipes. Please try again later.');
//         }
//     };

//     useEffect(() => {
//         fetchPopularData();
//     }, []);

//     if (error) {
//         return <div className="text-center text-red-600">{error}</div>;
//     }

//     return (
//         <div>
//             <Container className='mt-12'>
//                 <div className="popular-recipe">
//                     <div className="popular-recipe__main-heading text-center">
//                         <h6 className="font-bold pb-3 border-b-2 border-red-600 inline-block">Popular Recipe</h6>
//                     </div>
//                     {popularFood.map((food, index) => (
//                         <div key={index} className="mt-6">
//                             <h6 className="text-lg font-semibold mt-4 mb-2">{food.charAt(0).toUpperCase() + food.slice(1)}</h6>
//                             <Row>
//                                 {data[food] && data[food].map((item, idx) => (
//                                     <Col key={idx} lg='4' md='4' sm='6' className="mb-4">
//                                         <div className="recipe-item text-center">
//                                             <img src={item.recipe.image} alt={item.recipe.label} className="w-full h-40 object-cover rounded-md" />
//                                             <h5 className="mt-2 text-lg font-semibold">{item.recipe.label}</h5>
//                                         </div>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default Popular;

import React, { useState, useEffect } from 'react';
import img from '../assets/image1.jpg';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { popularRecipeFetch } from '../Service/Service';

function Popular() {
  const [popularData, setPopularData] = useState('burger');
  const [data, setData] = useState([]);

  const popularFetch = async () => {
    try {
      const fetchedData = await popularRecipeFetch(popularData);
      setData(fetchedData);
      console.log(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    popularFetch();
  }, [popularData]);

  return (
    <div>
      <Container className='mt-12'>
        <div className="popular-recipe">
          <div className="popular-recipe__main-heading text-center">
            <h6 className="font-bold pb-3 border-b-2 border-red-600 inline-block">Popular Recipe</h6>
          </div>
          <div className="mt-6 caret-red-50">
            <Row>
              {data.map((item, index) => (
                <Col lg='3' md='3' sm='6' className="mb-4" key={index}>
                  <div className="recipe-item bg-white shadow-lg rounded-md overflow-hidden">
                    <img src={item.recipe.image} alt={item.recipe.label} className="w-full h-60 object-cover" />
                    <div className="p-2 text-center">
                      <h5 className="text-1xl font-semibold">{item.name}</h5>
                      <Link to='/' className='no-underline text-xs btn btn-danger mt-2'>Get Recipe</Link>
                      <div className="icon flex justify-center mt-3">
                        <i className="ri-heart-2-line mx-1 text-[1.3em]"></i>
                        <p className="text-xs font-semibold mx-1">Mark as Favourite</p>
                        <i className="ri-chat-1-line mx-1 text-[1.3em]"></i>
                        <p className="text-xs font-semibold mx-1">Comment</p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Popular;
