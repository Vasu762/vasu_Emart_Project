import React from 'react'
import assets61 from '../assets/asset 61.svg'
import assets60 from '../assets/asset 60.svg'
import assets56 from '../assets/asset 56.svg'
import assets58 from '../assets/asset 58.svg'
import assets57 from '../assets/asset 57.svg'
import { Container, Row, Col } from 'react-bootstrap';

const BlogOne = () => {
    return (
        <div className='container px-2'>
            <div className='bg-red-100 pb-20'>
                <div className='pt-16'>
                    <p className='xl:text-center font-semibold text-lg lg:text-left'>Featured Posts</p>
                    <p className='xl:text-center font-bold text-4xl lg:text-start'>News & Insights From</p>
                    <p className='xl:text-center font-bold text-4xl lg:text-start'>Our Experts</p>
                </div>
                <div className='flex justify-between flex-wrap'>
                    <div class='object-fill xl:max-w-[800px] m-3 inline-block overflow-hidden max-h-[600px] max-w-[500px]'>
                        <img class='xl:max-w-[900px]  md:w-full hover:transform hover:scale-105 hover:scaleY-125 hover:opacity-75 object-cover h-full w-full transition-transform duration-300 ease-in-out' src="https://emart.wpthemedemos.com/wp-content/uploads/2022/10/blog-img-22.webp" alt="" />
                        <p class='mt-3 text-2xl font-bold'>How To Dress Appropriately For Any Occasion</p>
                        <p>Discover More</p>
                    </div>



                    <div className='mt-4 '>
                        <div class=''>
                            <div class='overflow-hidden inline-block max-h-[400px] md:max-w-[500px]'>
                                <img class='hover:scale-105 hover:opacity-75 transition-transform duration-300 object-cover h-full w-full ease-in-out' src="https://emart.wpthemedemos.com/wp-content/uploads/2022/10/blog-img-11.webp" alt="" />
                            </div>
                            <p class='text-2xl font-bold mt-3'>7 Ways To Stand Out With Your Personal Style</p>
                            <p>Discover More </p>
                        </div>



                        <div class=''>
                            <div class='overflow-hidden inline-block max-h-[400px] md:max-w-[500px]'>
                                <img class='hover:scale-105 hover:opacity-75 transition-transform duration-300 object-cover h-full w-full ease-in-out' src="https://emart.wpthemedemos.com/wp-content/uploads/2022/10/blog-img-12-1.webp" alt="" />
                            </div>
                            <p class='text-2xl font-bold mt-3'>5 Essential Wardrobe Staples For Every Fashionista</p>
                            <p>Discover More </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='mt-16'>
                <p className='font-semibold text-lg'>Other Posts</p>
                <p className='text-4xl font-bold mt-2'>Our Recent Blogs</p>

                <Container className='mt-4'>
                    <Row>
                        <Col lg={6} md={12} >
                            <div className='overflow-hidden inline-block max-h-[600px] max-w-[850px]'>
                                <img className='hover:opacity-50  hover:overflow-hidden hover:scale-105 duration-500 transition-transform ease-in-out object-cover h-full w-full' src="https://emart.wpthemedemos.com/wp-content/uploads/2021/05/blog-img-23.webp" alt="" />
                            </div>
                            <p className='mt-3 font-bold text-2xl'>How To Accessorize To Perfectly Compliment Your Outfit</p>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className='overflow-hidden inline-block max-h-[600px] max-w-[850px]'>
                                <img className='hover:opacity-50  hover:overflow-hidden hover:scale-105 duration-500 transition-transform ease-in-out object-cover h-full w-full' src="https://emart.wpthemedemos.com/wp-content/uploads/2022/10/blog-img-12.webp" alt="" />
                            </div>
                            <p className='mt-3 font-bold text-2xl'>The Benefits Of Shopping Small And Local</p>
                        </Col>
                    </Row>
                </Container>
            </div>


            <footer>
                <div class='bg-slate-300 mt-10'>

                    <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 pt-20'>

                        <div class=' sm:text-left'>
                            <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/02/e-mart-logo-03.svg" alt="" class=' sm:mx-0' />
                            <p class='mt-4 text-slate-500'>Molestie vitae massa felis, aliquam lectus at. <br /> Ultricies et, quis sit fermentum.</p>
                        </div>

                        <div class=' sm:text-left mt-10 sm:mt-0'>
                            <p class='font-bold'>Quick Link</p>
                            <p className='text-slate-500'>About</p>
                            <p className='text-slate-500'>Product</p>
                            <p className='text-slate-500'>Responsibility</p>
                            <p className='text-slate-500'>Career</p>
                        </div>

                        <div class=' sm:text-left mt-10 sm:mt-0'>
                            <p class='font-bold '>Services</p>
                            <p className='text-slate-500'>My Account</p>
                            <p className='text-slate-500'>Checkout Page</p>
                            <p className='text-slate-500'>Help Center</p>
                            <p className='text-slate-500'>Terms & Condition</p>
                        </div>

                        <div class=' sm:text-left mt-10 sm:mt-0'>
                            <p class='font-bold'>More</p>
                            <p className='text-slate-500'>Gift Card</p>
                            <p className='text-slate-500'>Lookbook</p>
                            <p className='text-slate-500'>Rewards Program</p>
                            <p className='text-slate-500'>Wedding Dress</p>
                        </div>

                    </div>


                    <div className='mt-20 border-t'>

                        <div className='flex justify-between p-3'>
                            <div className='flex space-x-3'>
                                <img src={assets56} alt="" />
                                <img src={assets57} alt="" />
                                <img src={assets58} alt="" />
                                <img src={assets60} alt="" />
                                <img src={assets61} alt="" />
                            </div>
                            <div className='mt-6'>
                                <p className='text-slate-500 inline-block'>Designed by :</p>
                                <p className='inline-block text-slate-500  font-bold'>Wpignite</p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default BlogOne
