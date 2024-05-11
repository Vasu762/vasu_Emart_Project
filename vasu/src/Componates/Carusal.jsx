import React from 'react'
import asset56 from '../assets/asset 56.svg'
import asset57 from '../assets/asset 57.svg'
import asset27 from '../assets/asset 27.svg'
import asset49 from '../assets/asset 49.svg'
import asset17 from '../assets/asset 17.svg'
import asset52 from '../assets/asset 52.svg'
import asset53 from '../assets/asset 53.svg'
import asset54 from '../assets/asset 54.svg'
import asset58 from '../assets/asset 58.svg'
import asset59 from '../assets/asset 59.svg'
import asset60 from '../assets/asset 60.svg'

const Carusal = () => {
    return (
        <>

            <div className='container xl:p-20 '>
                <div className='mt-5 xl:flex  xl:justify-between lg:flex-wrap md:flex-wrap max-sm:flex-wrap  '>
                    <div>
                        <div className='flex justify-between'>
                            <p>Home / Casual Shoes / Alpha Bounce Lux Shoes</p>
                            <img className='border-2 border-solod border-gray-100 rounded-full p-3' src={asset27} alt="" />
                        </div>
                        <p className='mt-2 font-bold text-2xl'> Alpha bounce lux shoes</p>
                        <p className='mt-2'>(1 Review)</p>
                        {/* timer */}
                        <p className='mt-2'>$190.00 - $230.00</p>
                        <p className='inline-block font-bold mt-2'>Shoe Size</p>
                        <p className='inline-block text-gray-500'>: 7</p>

                        <div className='flex gap-2 mt-2'>
                            <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-16 p-2 ps-4'>7</div>
                            <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-16 p-2 ps-4'>8</div>
                            <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-16 p-2 ps-4'>9</div>
                            <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-16 p-2 ps-4'>10</div>
                            <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-16 p-2 ps-4'>11</div>
                        </div>
                        <p className='text-sm mt-2'>Clear</p>
                        <div className='flex mt-4'>
                            <del className='mt-1'>$330.00</del>
                            <p className='text-xl  ms-2 font-extrabold'>$190.00</p>
                            <div class="h-7 border-l ms-2 border-gray-500"></div>
                            <p className='font-bold text-xl ms-2 text-green-800'>-42%</p>
                        </div>

                        <p className='mt-3'>Hurry up!! only 6 items left</p>
                        <p className='mt-3 text-gray-500'>Size Chart</p>
                        <p className='font-bold mt-2'>Quantity</p>

                        <div className='flex relative'>
                            <div className='border-2 border-solid border-gray-200 hover:border-black h-12 w-20 mt-2'><p className='mt-2 text-center'>1</p> </div>
                            <div className='border-2 duration-500 ease-in-out hover:-translate-y-1  border-solid border-gray-600 xl:w-[400px] xl:h-12 ms-3 mt-2 lg:w-full md:w-full max-sm:w-full '><p className='text-center mt-2'>Add To Cart</p></div>
                        </div>

                        <div className='xl:w-[500px] border-2  bg-black mt-2 border-solid border-gray-600 h-12  lg:w-full md:w-full max-sm:w-full duration-500 ease-in-out hover:-translate-y-1'>
                            <p className='text-center mt-2 text-white'>Buy Now</p>
                        </div>


                        <div className='flex mt-3'>
                            <img className='h-6 w-6' src={asset17} alt="" />
                            <p className='font-semibold ms-3'>SKU::</p>
                            <p className='text-gray-500'> ABS75009</p>
                        </div>


                        <div className='flex mt-3'>
                            <img className='h-6 w-6' src={asset49} alt="" />
                            <p className='font-semibold ms-3'>Categories:</p>
                            <p className='text-gray-500'>Best Selling Products, Casual Shoes</p>
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

                    <div>
                        <img className='xl:h-[700px] xl:w-[580px] lg:w-full md:w-full max-sm:w-full' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/alpha-bounce-lux-shoes-hover.webp" alt="" />
                    </div>
                    <div>

                    </div>
                </div>



                <div className='mt-7'>
                    <div className='xl:flex xl:gap-3  lg:flex lg:gap-3 md:flex md:gap-3  '>
                        <div className='text-gray-500  hover:text-white hover:bg-black p-2'>Dessciption</div>
                        <div className='text-gray-500  hover:text-white hover:bg-black p-2'>Additional information</div>
                        <div className='text-gray-500  hover:text-white hover:bg-black p-2'>Reviews</div>
                    </div>

                    <hr />

                    <div className='xl:flex  mt-4 '>
                        <div className='xl:flex lg:flex md:flex gap-3'>
                            <div className=''>
                                <img className='xl:h-[300px] xl:w-[450px]  lg:h-[550px] lg:w-[500px] md:h-[550px] md:w-[500px] ' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/alpha-bounce-lux-shoes.webp" alt="" />
                            </div>


                            <div>
                                <img className='xl:h-[300px] xl:w-[450px] lg:h-[550px] lg:w-[500px] md:h-[550px] md:w-[500px] max-sm:mt-6' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/alpha-bounce-lux-shoes-hover.webp" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className='text-2xl font-bold ms-3'>Product details</p>
                            <p className='text-wrap mt-3 text-gray-500 ms-3'>Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.</p>
                            <p className='text-wrap mt-3 text-gray-500 ms-3'>Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.</p>
                        </div>

                    </div>


                    <p className='mt-3 text-xl font-bold'>Related Products</p>
                    <div className='grid xl:grid-cols-4  lg:grid-cols-4  md:grid-cols-3 max-sm:grid-cols-2 grid-cols-1 gap-3'>
                        <div className='mt-3 '>
                            <div className='relative overflow-hidden inline-block'>
                                <img className='hover:opacity-100 duration-1000 ease-out hover:scale-95' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/red-white-high-top-sneaker-hover.webp" alt="" />
                                <img className='absolute top-0 hover:opacity-0 duration-700 ease-out hover:scale-110' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/deerupt-shoes-hover.webp" alt="" />
                            </div>
                            <p className='font-bold text-lg '>Swift Run Shoe</p>
                            <p className='text-gray-500  '>$530.00</p>
                        </div>



                        <div className='mt-3 '>
                            <div className='relative overflow-hidden inline-block'>
                                <img className='hover:opacity-100 duration-1000 ease-out hover:scale-95' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/deerupt-shoes-hover.webp" alt="" />
                                <img className='absolute top-0 hover:opacity-0 duration-700 ease-out hover:scale-110' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/wlaking-tennis-shoes-hover.webp" alt="" />
                            </div>
                            <p className='font-bold text-lg '>Deerupt Shoes</p>
                            <p className='text-gray-500 '>$510.00</p>
                        </div>


                        <div className='mt-3 '>
                            <div className='relative overflow-hidden inline-block'>
                                <img className='hover:opacity-100 duration-1000 ease-out hover:scale-95' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/wlaking-tennis-shoes-hover.webp" alt="" />
                                <img className='absolute top-0 hover:opacity-0 duration-700 ease-out hover:scale-110' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/white-sports-shoes-hover.webp" alt="" />
                            </div>
                            <p className='font-bold text-lg '>Walking-Tennis Shoes</p>
                            <p className='text-gray-500 '>$330.00 - $510.00</p>
                        </div>



                        <div className='mt-3 '>
                            <div className='relative overflow-hidden inline-block'>
                                <img className='hover:opacity-100 duration-1000 ease-out hover:scale-95' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/red-white-high-top-sneaker-hover.webp" alt="" />
                                <img className='absolute top-0 hover:opacity-0 duration-700 ease-out hover:scale-110' src="https://emart.wpthemedemos.com/shoes/wp-content/uploads/sites/18/2023/01/deerupt-shoes-hover.webp" alt="" />
                            </div>
                            <p className='font-bold text-lg '>White Sports Shoes</p>
                            <p className='text-gray-500 '>$420.00</p>
                        </div>


                    </div>
                </div>

            </div>

            <footer className='bg-sky-50'>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 container  xl:p-5 '>
                    <div className='lg:mt-5 lg:ms-3 md:mt-12 md:ms-3 max-sm:mt-10 max-sm:ms-3 '>
                        <p className='text-2xl font-bold'>Newsletter</p>
                        <p className='mt-4 text-gray-500 text-lg'>Get free 20% discount for all products on your first order</p>
                        <input className='xl:h-10 xl:w-[350px] lg:h-10 lg:w-[400px] md:h-10 md:w-[250px] max-sm:h-10 max-sm:w-[250px] w-20 p-4' placeholder='Your Email' type="text" />
                        <button className='xl:h-11 xl:w-10 lg:h-11 lg:w-10 md:h-11 md:w-10  max-sm:h-11 max-sm:w-10 bg-red-500  mt-3'><p className='duration-500 hover:translate-x-1 '>--</p></button>
                    </div>

                    <div className='lg:mt-9 lg:ms-12  md:mt-12 md:ms-3 max-sm:mt-10 max-sm:ms-3 xl:ms-52'>
                        <p className='mt-2 font-bold text-2xl '>Quick contact</p>
                        <p className='mt-6 text-slate-500 '>121 King St, Melbourne VIC 3000,Australia</p>
                        <span className='block border-2 border-solid border-current p-2 xl:w-44 rounded-full mt-2 lg:w-40 max-sm:w-[200px] md:w-[200px]'> <p className='ms-10'>(888) 123 45</p> </span>
                    </div>



                    <div className='lg:flex-nowrap md:flex-wrap lg:mt-5 lg:ms-3 md:mt-12 md:ms-3 max-sm:mt-10 max-sm:ms-3 xl:ms-64'>
                        <p className=' font-bold text-2xl '>Fllow us</p>
                        <div className='xl:flex lg:flex md:flex max-sm:flex gap-3 mt-3'>
                            <img src={asset52} alt="" />
                            <img src={asset53} alt="" />
                            <img src={asset54} alt="" />
                        </div>

                        <div className='xl:flex xl:mt-7 xl:gap-6 lg:gap-4 md:flex md:gap-4 md:mt-5 max-sm:flex max-sm:gap-4 max-sm:mt-3 lg:flex'>
                            <img src={asset58} alt="" />
                            <img src={asset59} alt="" />
                            <img src={asset60} alt="" />
                        </div>
                    </div>
                </div>


                <div className='mt-4'>
                    <hr />
                </div>

                <div className='p-6 text-center max-sm:text-start'>
                    <p className='inline-block'>Designed by : </p>
                    <p className='font-bold inline-block'>Wpignite</p>
                </div>
            </footer>
        </>
    )
}

export default Carusal
