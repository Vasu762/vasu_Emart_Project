import React from 'react'
import asset52 from '../assets/asset 52.svg'
import asset53 from '../assets/asset 53.svg'
import asset54 from '../assets/asset 54.svg'
import asset56 from '../assets/asset 56.svg'
import asset57 from '../assets/asset 57.svg'
import asset58 from '../assets/asset 58.svg'
import asset59 from '../assets/asset 59.svg'
import asset60 from '../assets/asset 60.svg'



const WishList = () => {
    return (
        <div className='container xl:p-5'>
            <div className=' p-6 xl:w-full lg:w-full md:w-full sm:w-full shadow-md shadow-gray-500 mt-5'>
                <p className=''>Your Wishlist is currently empty.</p>
            </div>
            <div className='bg-black  text-white xl:h-12 lg:h-12 md:h-12 sm:h-12 xl:max-w-[250px] lg:max-w-[250px] md:max-w-[240px] sm:max-w-[230px] mt-5 p-2 px-5 py-2  duration-500 ease-in-out hover:-translate-y-3'>
                <p className='mt-1 ms-3 '>Return To Shop</p>
            </div>



            <footer className='bg-slate-200 mt-36 '>
                <div className='p-16 xl:flex   xl:gap-x-16'>
                    <div className=''>
                        <p className='font-bold text-2xl'>Newsletter</p>
                        <p className='c text-lg mt-2'>Get free 20% discount for all products on your first order</p>
                        <input type="text" className='p-2 mt-3 xl:w-[250px] lg:w-[700px] md:w-[450px]' placeholder='Your Email' name="" id="" />
                        {/* <span className='text-white xl:h-6  xl:w-7 bg-'>--</span> */}
                        <button className='bg-red-900 xl:w-9 xl:h-9 text-white  lg:w-12 lg:h-10 md:h-9 md:w-10 sm:w-10  sm:h-10 '><p className='duration-500 hover:translate-x-1 '>--</p></button>
                    </div>

                    <div className='xl:flex lg:flex lg:gap-28 lg:mt-6 xl:justify-around xl:gap-48'>
                        <div>
                            <p className='mt-2 font-bold text-2xl'>Quick contact</p>
                            <p className='mt-2 text-slate-500'>121 King St, Melbourne VIC 3000,Australia</p>
                            <span className='block border-2 border-solid border-current p-2 xl:w-44 rounded-full mt-2 lg:w-40 md:w-[200px]'> <p className='ms-10'>(888) 123 45</p> </span>
                        </div>

                        <div className='lg:flex-nowrap md:flex-wrap'>
                            <p className=' font-bold text-2xl '>Fllow us</p>
                            <div className='xl:flex lg:flex md:flex sm:flex gap-3 mt-3'>
                                <img src={asset52} alt="" />
                                <img src={asset53} alt="" />
                                <img src={asset54} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='xl:flex lg:flex md:flex lg:justify-around md:justify-around xl:justify-around'>
                    <div className='xl:flex  lg:flex md:flex sm:flex xl:gap-2 xl:p-3 lg:p-3 md:p-3 sm:p-3'>
                        <img src={asset56} alt="" />
                        <img src={asset57} alt="" />
                        <img src={asset58} alt="" />
                        <img src={asset59} alt="" />
                        <img src={asset60} alt="" />
                    </div>

                    <div className='xl:mt-3'>
                        <p className='inline-block text-slate-500'>Designed by :</p>
                        <p className='inline-block font-extrabold text-slate-500'>Wpignite</p>
                    </div>
                </div>
            </footer>






        </div>




    )
}

export default WishList
