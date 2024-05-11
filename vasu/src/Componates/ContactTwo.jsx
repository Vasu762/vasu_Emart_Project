import React from 'react'
import asset56 from '../assets/asset 56.svg'
import asset57 from '../assets/asset 57.svg'
import asset58 from '../assets/asset 58.svg'
import asset59 from '../assets/asset 59.svg'
import asset60 from '../assets/asset 60.svg'


const ContactTwo = () => {
    return (
        <div className='container '>
            <div className='xl:flex '>
                <div className=''>
                    <img className='xl:max-w-[1100px] xl:h-[600px]  lg:w-full md:w-full sm:w-full' src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/contact-img-1.jpg" alt="" />
                </div>

                <div className='xl:ms-14 lg:flex-wrap'>
                    <p className='text-red-400 font-semibold text-lg'>We Are Happy To Answer You</p>
                    <p className='mt-3 text-4xl font-semibold '>Contact</p>


                    <div className='mt-3 xl:flex lg:flex md:flex'>
                        <div>
                            <p className='text-lg font-medium'>Address:</p>
                            <p className='mt-2 font-normal text-slate-500 '>121 King St, Melbourne VIC 3000, Australia</p>
                        </div>

                        <div className=''>
                            <p className='inline-block font-bold'>Telephone : </p>
                            <p className='inline-block text-slate-500'>888 321 9874</p><br />
                            <p className='font-bold inline-block mt-3'>Email :</p>
                            <p className='inline-block'>info@example.com</p>
                        </div>
                    </div>


                    <p className='text-red-400 font-semibold text-lg  mt-5'>Need Help</p>
                    <p className='text-4xl font-semibold'>Send Your Request</p>
                    <input className='border-2 border-solid border-gray-600 mt-3 h-12 p-2 xl:w-[600px] lg:w-full  md:w-full max-sm:w-full lg:py-2 ' placeholder='Name' type="text" name="" id="" /><br />
                    <input className='border-2 border-solid border-gray-600 mt-3 h-12 p-2 xl:w-[600px] lg:w-full md:w-full max-sm:w-full lg:py-2 ' placeholder='Email Address' type="text" name="" id="" /><br />
                    <input className='border-2 border-solid border-gray-600 mt-3 h-12 p-2 xl:w-[600px] lg:w-full  md:w-full max-sm:w-full lg:py-2 ' placeholder='Phone' type="text" name="" id="" /><br />
                    <textarea className='border-2 border-solid border-gray-600 mt-3  p-2  h-28 lg:py-2   xl:w-[600px]  lg:w-full  md:w-full max-sm:w-full ' placeholder='Message' name="" id="" cols="" rows=""></textarea>
                    <button className='mt-3 h-12 p-2 xl:w-[600px] lg:w-full lg:py-2 bg-black text-white  md:w-full max-sm:w-full'>Send Message</button>
                </div>
            </div>

            <footer className='bg-slate-200 mt-4 '>
                <div className='container pt-20 xl:flex xl:justify-around'>
                    <div className='xl:flex lg:flex md:flex sm:flex-wrap md:gap-20  xl:gap-16'>
                        <div className='sm:flex-wrap'>
                            <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/02/e-mart-logo-03.svg" alt="" />
                            <p className='text-wrap text-slate-500 font-semibold'>Molestie vitae massa felis, aliquam lectus at. <br /> Ultricies et, quis sit fermentum.</p>
                        </div>
                        <div className='sm:flex-wrap'>
                            <p className='font-bold text-lg'>Quick Link</p>
                            <p className='mt-2 text text-slate-500 '>About</p>
                            <p className='mt-1 text text-slate-500 '>Product</p>
                            <p className='mt-1 text text-slate-500 '>Responsibility</p>
                            <p className='mt-1 text text-slate-500 '>Career</p>
                        </div>
                    </div>




                    <div className='xl:flex xl:gap-28 md:gap-64  lg:flex-wrap md:flex lg:flex lg:gap-64'>
                        <div className=''>
                            <p className='font-bold text-lg'>Services</p>
                            <p className='mt-2 text text-slate-500 '>My Account</p>
                            <p className='mt-1 text text-slate-500 '>Checkout Page</p>
                            <p className='mt-1 text text-slate-500 '>Help Center</p>
                            <p className='mt-1 text text-slate-500 '>Terms & Condition</p>
                        </div>

                        <div className='sm:flex-wrap'>
                            <p className='font-bold text-lg'>Services</p>
                            <p className='mt-2 text text-slate-500 '>My Account</p>
                            <p className='mt-1 text text-slate-500 '>Checkout Page</p>
                            <p className='mt-1 text text-slate-500 '>Help Center</p>
                            <p className='mt-1 text text-slate-500 '>Terms & Condition</p>
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

export default ContactTwo
