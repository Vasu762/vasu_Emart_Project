import React from 'react'
import asset52 from '../assets/asset 52.svg'
import asset53 from '../assets/asset 53.svg'
import asset54 from '../assets/asset 54.svg'
import asset56 from '../assets/asset 56.svg'
import asset57 from '../assets/asset 57.svg'
import asset58 from '../assets/asset 58.svg'
import asset59 from '../assets/asset 59.svg'
import asset60 from '../assets/asset 60.svg'

const Cart = () => {
    return (
        <div className='container xl:p-5'>
            <div className='bg-amber-900 max:smhidden'>
                <p className='text-center text-white max-sm:hidden'>Free delivery on orders over $1499. Don’t miss discount.</p>
            </div>

            <div className=' p-6 xl:w-full lg:w-full md:w-full sm:w-full shadow-md shadow-gray-500 mt-5'>
                <p className=''>Your Wishlist is currently empty.</p>
            </div>
            <div className='bg-black  text-white xl:h-12 lg:h-12 md:h-12 sm:h-12 xl:max-w-[250px] lg:max-w-[250px] md:max-w-[240px] sm:max-w-[230px] mt-5 p-2 px-5 py-2  duration-500 ease-in-out hover:-translate-y-3'>
                <p className='mt-1 ms-3 '>Return To Shop</p>
            </div>



            <footer className='bg-slate-200 mt-24 '>
                <div className='container pt-20 xl:flex xl:justify-around'>
                    <div className='xl:flex lg:flex md:flex sm:flex-wrap md:gap-20  xl:gap-40'>
                        <div className='sm:flex-wrap'>
                            {/* <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/02/e-mart-logo-03.svg" alt="" /> */}
                            <p className='text-wrap text-slate-500 font-semibold mt-3'>Molestie vitae massa felis, aliquam lectus at. <br /> Ultricies et, quis sit fermentum.</p>
                        </div>
                        <div className='sm:flex-wrap'>
                            <p className='font-bold text-lg'>Quick Link</p>
                            <p className='mt-2 text text-slate-500 '>About</p>
                            <p className='mt-1 text text-slate-500 '>Product</p>
                            <p className='mt-1 text text-slate-500 '>Responsibility</p>
                            <p className='mt-1 text text-slate-500 '>Career</p>
                        </div>
                    </div>




                    <div className='xl:flex xl:gap-60 md:gap-64   lg:flex-wrap md:flex lg:flex lg:gap-64'>
                        <div className=''>
                            <p className='font-bold text-lg'>Services</p>
                            <p className='mt-2 text text-slate-500 '>My Account</p>
                            <p className='mt-1 text text-slate-500 '>Checkout Page</p>
                            <p className='mt-1 text text-slate-500 '>Help Center</p>
                            <p className='mt-1 text text-slate-500 '>Terms & Condition</p>
                        </div>

                        <div className='sm:flex-wrap'>
                            <p className='font-bold text-lg'>More</p>
                            <p className='mt-2 text text-slate-500 '>Gift Card</p>
                            <p className='mt-1 text text-slate-500 '>Lookbook</p>
                            <p className='mt-1 text text-slate-500 '>Rewards Program</p>
                            <p className='mt-1 text text-slate-500 '>Wedding Dress</p>
                        </div>
                    </div>
                </div>


                <div className='xl:w-full lg:w-full md:w-full sm:w-full mt-6'>
                    <hr />
                </div>



                {/* icons */}


                <div className='xl:flex lg:flex md:flex lg:justify-around md:justify-around xl:justify-around'>
                    <div className='xl:flex  lg:flex md:flex  max-sm:flex xl:gap-2 xl:p-3 lg:p-3 md:p-3 sm:p-3 '>
                        <img src={asset56} alt="" />
                        <img src={asset57} alt="" />
                        <img src={asset58} alt="" />
                        <img src={asset59} alt="" />
                        <img className='' src={asset60} alt="" />
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

export default Cart
