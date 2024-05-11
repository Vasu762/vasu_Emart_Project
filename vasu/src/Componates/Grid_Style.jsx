import React from 'react'
import favorite from '../assets/favorite-svgrepo-com.svg'
import asset27 from '../assets/asset 27.svg'
import asset49 from '../assets/asset 49.svg'
import asset17 from '../assets/asset 17.svg'
import asset56 from '../assets/asset 56.svg'
import asset57 from '../assets/asset 57.svg'
import asset58 from '../assets/asset 58.svg'
import asset59 from '../assets/asset 59.svg'
import asset60 from '../assets/asset 60.svg'
import asset52 from '../assets/asset 52.svg'
import asset53 from '../assets/asset 53.svg'
import asset54 from '../assets/asset 54.svg'



    
const Grid_Style = () => {
    return (
        <>
            <div className='container xl:p-20'>
                <div>
                    <div>
                        <p className='text-center'>Home / Face / Essence Toner</p>
                    </div>

                    <div className='mt-5 xl:flex  xl:justify-between lg:flex-wrap md:flex-wrap max-sm:flex-wrap  '>
                        <div>
                            <img className='xl:h-[700px] xl:w-[580px] lg:w-full md:w-full max-sm:w-full' src="https://emart.wpthemedemos.com/skin-care/wp-content/uploads/sites/16/2023/01/mosteriser.webp" alt="" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <p>Essence Toner</p>
                                <img className='border-2 border-solod border-gray-100 rounded-full p-3' src={asset27} alt="" />
                            </div>
                            <p>(1 Review)</p>
                            <p className='font-semibold text-xl text-red-700'>Hot Deal Ends In</p>
                            {/* timer */}
                            <p>$80.00 - $160.00 </p>
                            <p className='inline-block font-bold '>Net Weight</p>
                            <p className='inline-block text-gray-500'>: 25ml</p>

                            <div className='flex gap-2'>
                                <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-20 p-2 ps-4'>25ml</div>
                                <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-20 p-2 ps-4'>25ml</div>
                                <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-20 p-2 ps-4'>25ml</div>
                                <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-20 p-2 ps-4'>25ml</div>
                            </div>
                            <p className='text-sm'>Clear</p>
                            <div className='flex mt-4'>
                                <del className='mt-1'>$100.00</del>
                                <p className='text-xl  ms-2 font-extrabold'>$80.00</p>
                                <div class="h-7 border-l ms-2 border-gray-500"></div>
                                <p className='font-bold text-xl ms-2 text-green-800'>-20%</p>
                            </div>

                            <p className='mt-3 font-bold'>Quantity</p>

                            <div className='flex relative'>
                                <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-20 mt-2'><p className='mt-2 text-center'>1</p> </div>
                                <div className='border-2 duration-500 ease-in-out hover:-translate-y-1  border-solid border-gray-600 xl:w-[400px] xl:h-12 ms-3 mt-2 lg:w-full md:w-full max-sm:w-full '><p className='text-center mt-2'>Add To Cart</p></div>
                            </div>

                            <div className='xl:w-[500px] border-2  bg-black mt-2 border-solid border-gray-600 h-12  lg:w-full md:w-full max-sm:w-full duration-500 ease-in-out hover:-translate-y-1'>
                                <p className='text-center mt-2 text-white'>Buy Now</p>
                            </div>


                            <div className='flex mt-3'>
                                <img className='h-6 w-6' src={asset17} alt="" />
                                <p className='font-semibold ms-3'>Estimated Delivery:</p>
                                <p className='text-gray-500'>Within 5-7 days</p>
                            </div>


                            <div className='flex mt-3'>
                                <img className='h-6 w-6' src={asset49} alt="" />
                                <p className='font-semibold ms-3'>Free shipping:</p>
                                <p className='text-gray-500'>On orders over $1499 and above</p>
                            </div>

                            <div className='mt-4'>
                                <hr />
                            </div>

                            <div className='flex justify-between'>
                                <div className='mt-2 flex'>
                                    <p className='font-bold'>SKU:</p>
                                    <p className='text-gray-500'>ETO50035</p>
                                </div>

                                <div className='mt-2 flex'>
                                    <p className='font-bold'>Categories:</p>
                                    <p className='text-gray-500 text-wrap'>Face, Ourcollection</p>
                                </div>
                            </div>

                            <div className='w-full bg-slate-200 p-3 mt-5'>
                                <p className='text-center'>Online payment option</p>
                                <div className='flex justify-center'>
                                    <img src={asset56} alt="" />
                                    <img src={asset57} alt="" />
                                    <img src={asset58} alt="" />
                                    <img src={asset59} alt="" />
                                    <img src={asset60} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='xl:flex xl:gap-10 lg:hidden md:hidden max-sm:hidden'>
                        <img className='xl:h-[310px] xl:w-[260px] ' src="https://emart.wpthemedemos.com/skin-care/wp-content/uploads/sites/16/2023/01/mosteriser.webp" alt="" />
                        <img className='xl:h-[310px] xl:w-[260px]' src="https://emart.wpthemedemos.com/skin-care/wp-content/uploads/sites/16/2023/01/paroduct-gallery-1.webp" alt="" />
                    </div>

                    <div className='mt-7'>
                        <div className='xl:flex xl:gap-3  lg:flex lg:gap-3 md:flex md:gap-3  '>
                            <div className='text-gray-500  hover:text-white hover:bg-black p-2'>Dessciption</div>
                            <div className='text-gray-500  hover:text-white hover:bg-black p-2'>Additional information</div>
                            <div className='text-gray-500  hover:text-white hover:bg-black p-2'>Reviews</div>
                        </div>
                        <hr />

                        <div className='flex  gap-3 mt-5'>
                            {/* <div className='flex'> */}
                            <img className='xl:h-[310px] xl:w-[260px] lg:h-[290px] lg:w-[230px] md:h-[230px] md:w-[180px] max-sm:h-[130px] max:sm:w-[110px] ' src="https://emart.wpthemedemos.com/skin-care/wp-content/uploads/sites/16/2023/01/mosteriser.webp" alt="" />
                            <img className='xl:h-[310px] xl:w-[260px] lg:h-[290px] lg:w-[230px]  md:h-[230px] md:w-[180px] max-sm:h-[130px] max:sm:w-[110px]' src="https://emart.wpthemedemos.com/skin-care/wp-content/uploads/sites/16/2023/01/paroduct-gallery-1.webp" alt="" />
                            {/* </div> */}
                            <div>
                                <p className='text-wrap text-xl font-medium'>Product details</p>
                                <p className='text-gray-500 mt-6'>Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.</p>
                                <p className='text-gray-500 mt-6'>Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.</p>
                            </div>
                        </div>
                    </div>




                    <p className='mt-14'>Related Products</p>
                    <div className='mt-3 grid xl:grid-cols-4  lg:grid-cols-4  md:grid-cols-3 max-sm:grid-cols-2  gap-3'>
                        <div className='relative'>
                            <div className='inline-block overflow-hidden'>
                                <img className='object-fill hover:scale-105 duration-500 ease-in' src="https://emart.wpthemedemos.com/skin-care/wp-content/uploads/sites/16/2023/01/aloe-Body-moisturizer.webp" alt="" />
                            </div>
                            <p className='text-center'>Aloe Body Moisturizer</p>
                            <p className='text-center text-gray-500'>$84.00</p>
                            <div>
                                <p className='bg-black text-white absolute xl:top-3 xl:left-52 2xl:top-3 2xl:left-64 lg:top-3 lg:left-44 md:top-3 md:left-44 max-sm:hidden p-1'>-17%</p>
                            </div>
                        </div>


                        <div className='relative'>
                            <div className='inline-block overflow-hidden'>
                                <img className='object-fill hover:scale-105 duration-500 ease-in' src="https://emart.wpthemedemos.com/skin-care/wp-content/uploads/sites/16/2023/01/Cleanser.webp" alt="" />
                            </div>
                            <p className='text-center'>Cleanser</p>
                            <p className='text-center text-gray-500'>$140.00</p>
                            <div>
                                <p className='bg-black text-white absolute xl:top-3 xl:left-52 2xl:top-3 2xl:left-64 lg:top-3 lg:left-44 md:top-3 md:left-44 p-1 max-sm:hidden'>-50%</p>
                            </div>
                        </div>


                        <div>
                            <div className='inline-block overflow-hidden'>
                                <img className='object-fill hover:scale-105 duration-500 ease-in' src="https://emart.wpthemedemos.com/skin-care/wp-content/uploads/sites/16/2023/01/Hydrating-toner.webp" alt="" />
                            </div>
                            <p className='text-center'>Hydrating Toner</p>
                            <p className='text-center text-gray-500'>$80.00</p>
                        </div>


                        <div>
                            <div className='inline-block overflow-hidden'>
                                <img className='object-fill hover:scale-105 duration-500 ease-in' src="https://emart.wpthemedemos.com/skin-care/wp-content/uploads/sites/16/2023/01/Foundation.webp" alt="" />
                            </div>
                            <p className='text-center'>Foundation</p>
                            <p className='text-center'>$97.00</p>
                        </div>

                    </div>



                </div>
            </div>
            <footer className='bg-blue-950 w-full mt-8'>
                <div className='container p-5  pt-5 pb-5 grid xl:grid-cols-4  lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1'>
                    <div className='xl:ms-5'>
                        <p className='text-red-800 text-2xl font-bold'>Newsletter</p>
                        <p className='text-white break-all xl:mt-6 md:mt-5 max-sm:mt-4 max-sm:text-xl text-lg'>Get free 20% discount for all  products on your first order</p>
                        <input className='p-2 xl:mt-4 max-sm:mt-4 xl:w-52 lg:w-[350px] lg:mt-4 md:w-[250px] md:mt-4 max-sm:w-[290px]' placeholder='Your Email' type="text" />
                        <button className='bg-red-800 max-sm:p-2 md:p-2  xl:w-12 md:w-16 max-sm:w-14 '><p className='text-white hover:translate-x-3 duration-500'>--</p></button>
                    </div>


                    <div className='xl:ms-20 md:ms-8 md:pe-16 max-sm:mt-8'>
                        <p className='text-red-800 text-2xl font-bold'>Quick Contact</p>
                        <p className='text-white mt-3 text-lg'>121 King St, Melbourne VIC 3000,Australia</p>
                        <div className='border-2 border-solid rounded-full  border-slate-500 p-2 lg:mt-4 lg:w-48 md:mt-5 max-sm:w-48 max-sm:mt-4'>
                            <p className='text-white ms-5'>(888) 123 45 67</p>
                        </div>
                    </div>

                    <div className='xl:ms-24 lg:mt-8 md:mt-8 xl:mt-0 max-sm:mt-6'>
                        <p className='text-red-800 text-2xl font-bold'>Services</p>
                        <p className='text-white mt-4 text-lg'>My Account</p>
                        <p className='text-white mt-1 text-lg'>Checkout Page</p>
                        <p className='text-white mt-1 text-lg'>Help Center</p>
                        <p className='text-white mt-1 text-lg'>Terms & Condition</p>
                    </div>


                    <div className='lg:ms-10 lg:mt-7 md:ms-10 md:mt-7 max-sm:mt-5 xl:mt-0'>
                        <p className='text-red-800 text-2xl font-bold'>Follow Us</p>
                        <div className='flex gap-3 mt-3'>
                            <div className='w-10 h-10 border-2 border-solid border-black bg-black rounded-full'>
                                <img className='p-2' src={asset52} alt="" />
                            </div>

                            <div className='w-10 h-10 border-2 border-solid border-black bg-black rounded-full'>
                                <img className='p-2' src={asset53} alt="" />
                            </div>

                            <div className='w-10 h-10 border-2 border-solid border-black bg-black rounded-full'>
                                <img className='p-2' src={asset54} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='mt-2 text-white'>
                    < hr />
                </div>

                <div className='p-5 text-end'>
                    <p className='inline-block text-white'>Designed by : </p>
                    <p className='inline-block font-extrabold text-white'>Wpignite</p>
                </div>
            </footer>
        </>
    )
}

export default Grid_Style
