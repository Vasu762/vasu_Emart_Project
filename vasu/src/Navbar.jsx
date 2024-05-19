import React, { useState } from 'react';
// import asset1 from '../assets/asset 1.webp'


const Navbar = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
    };


    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };



    return (
        <>
            <div className='flex'>

                <div className="" onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}>
                    <div
                        className="navbar"
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    >
                        Demo
                    </div>

                    {isHovered1 && (
                        <div className='grid xl:grid-cols-4 lg:grid-cols-1 '>

                            <div className='d-xl-block d-md-none d-sm-none  d-lg-none'>
                                <img className='w-[300px] h-[200px] ' src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/01/Plant-and-garden-menu.webp' alt="" />
                                <p className='hover:translate-x-2 duration-300'>newproduct on the market</p>
                                <p className='hover:translate-x-2 duration-300'>Shop now</p>
                            </div>
                            <ul className=''>
                                <li className='hover:translate-x-2 duration-300 text-slate-500 inline-block'>Fashion Hub</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Woman Fashion</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Woman Fashion</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Big Fashion</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Fashion Store</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Handicraft</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>interior</li>
                            </ul>


                            <ul className=''>
                                <li className='hover:translate-x-2 duration-300 text-slate-500'>Plant Gearden</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Kid Toys</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Elecronic Gadget</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Bathroom</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Bicycle</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Shoes</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Bags</li>
                            </ul>


                            <ul className=''>
                                <li className='hover:translate-x-2 duration-300 text-slate-500'>Soap</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Skin Care</li>
                                <div className='flex'>
                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Woman Fashion</li>
                                    <div className='h-5  w-12  bg-red-700 text-white rounded-2xl ms-4 mt-3'><p className='translate-x-2 -translate-y-1'>new</p></div>
                                </div>
                                <div className='flex'>
                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Hiking Heaven</li>
                                    <div className='h-5  w-12  bg-red-700 text-white rounded-2xl ms-4 mt-3'><p className='translate-x-2 -translate-y-1'>new</p></div>
                                </div>
                                <div className='flex'>
                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Exotic Fragrances</li>
                                    <div className='h-5  w-12  bg-red-700 text-white rounded-2xl ms-4 mt-3'><p className='translate-x-2 -translate-y-1'>new</p></div>
                                </div>

                            </ul>
                        </div>
                    )}
                </div>








                <div className onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}>
                    <div
                        className="navbar"
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    >
                        Demo
                    </div>

                    {/* Content that appears when navbar is hovered */}
                    {isHovered2 && (
                        <div className='grid xl:grid-cols-4 lg:grid-cols-1'>

                            <div className='d-xl-block d-md-none d-sm-none  d-lg-none'>
                                <img className='w-[300px] h-[200px] ' src='https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/01/Plant-and-garden-menu.webp' alt="" />
                                <p className='hover:translate-x-2 duration-300'>newproduct on the market</p>
                                <p className='hover:translate-x-2 duration-300'>Shop now</p>
                            </div>
                            <ul className=''>
                                <li className='hover:translate-x-2 duration-300 text-slate-500 inline-block'>Fashion Hub</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Woman Fashion</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Woman Fashion</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Big Fashion</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Fashion Store</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Handicraft</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>interior</li>
                            </ul>


                            <ul className=''>
                                <li className='hover:translate-x-2 duration-300 text-slate-500'>Plant Gearden</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Kid Toys</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Elecronic Gadget</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Bathroom</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Bicycle</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Shoes</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Bags</li>
                            </ul>


                            <ul className=''>
                                <li className='hover:translate-x-2 duration-300 text-slate-500'>Soap</li>
                                <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Skin Care</li>
                                <div className='flex'>
                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Woman Fashion</li>
                                    <div className='h-5  w-12  bg-red-700 text-white rounded-2xl ms-4 mt-3'><p className='translate-x-2 -translate-y-1'>new</p></div>
                                </div>
                                <div className='flex'>
                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Hiking Heaven</li>
                                    <div className='h-5  w-12  bg-red-700 text-white rounded-2xl ms-4 mt-3'><p className='translate-x-2 -translate-y-1'>new</p></div>
                                </div>
                                <div className='flex'>
                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Exotic Fragrances</li>
                                    <div className='h-5  w-12  bg-red-700 text-white rounded-2xl ms-4 mt-3'><p className='translate-x-2 -translate-y-1'>new</p></div>
                                </div>

                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>



    );
};

export default Navbar;
