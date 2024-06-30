import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Sidenav.css';

const navbar = [
    { path: '/home', display: 'Home', icon: 'home-2' },
    { path: '/liked', display: 'Liked', icon: 'heart-2' },
    { path: '/favourite', display: 'Favourite', icon: 'heart-3' },
    { path: '/signin', display: 'Signin', icon: 'login-box' },
];

const Sidenavbar = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const handleShowNav = () => {
        setShowNavBar(!showNavBar);
    };

    return (
        <div className='relative'>
            <div className="main-logo absolute top-1 left-2 z-50 flex w-full">
                <span><i className="ri-restaurant-line text-extrabold text-black text-[1.8em]"></i></span>
                <h6 className='mt-2 mx-2 text-[1.2em] text-black'>Food<span className='text-red-700'>Lover</span></h6>
            </div>

            <div className="menu absolute z-[100] left-[1310px] top-0 my-2 mr-2 text-xl text-black font-extrabold text-2xl" onClick={handleShowNav}>
                <span><i className={!showNavBar ? 'ri-menu-2-line' : 'ri-close-fill'}></i></span>
            </div>

            {showNavBar && (
                <nav className="side-navbar flex z-50 flex-col items-center left-[1120px] p-20 bg-white shadow-lg border rounded w-56 h-screen absolute">
                    <div className="logo flex absolute top-12 text-black text-extrabold text-1xl z-100">
                        <h6 className='mx-2 text-1xl text-extrabold mt-1 text-red-700'>Food Lover</h6>
                        <span><i className="ri-restaurant-line text-extrabold text-[1.3em] text-red-700"></i></span>
                    </div>

                    {navbar.map((item, i) => (
                        <NavLink
                            key={i}
                            className="no-underline mt-14 text-black flex items-center hover:text-red-700"
                            to={item.path} 
                            onClick={() => setShowNavBar(false)}
                        >
                            <i className={`ri-${item.icon}-line mr-2`}></i>
                            {item.display}
                        </NavLink>
                    ))}

                    <hr className='text-black h-3 w-[90%] left-2 absolute top-[430px]' />

                    <div className="create flex items-center justify-start mt-24 absolute bg-red-700 top-[65%] p-1 rounded">
                        <span><i className="ri-add-line mx-2 text-3xl text-white"></i></span>
                        <h5 className='text-[1rem] mt-1 pr-1 text-white'>Create Recipe</h5>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Sidenavbar;
