import React from 'react'
import assets56 from '../assets/asset 56.svg'
import assets57 from '../assets/asset 57.svg'
import assets58 from '../assets/asset 58.svg'
import assets60 from '../assets/asset 60.svg'
import assets61 from '../assets/asset 61.svg'





const ContactTwo = () => {
    return (
        <div>

            <div className='flex  justify-between md:flex-wrap'>
                <div className='mt-5 object-fill 	xl:max-w-[800px]   md:w-full '>
                    {/* image */}
                    <img className='' src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/contact-img-1.jpg" alt="" />
                </div>
                <div className='mt-5 '>
                    <p className='text-red-600  font-semibold'>We Are Happy To Answer You</p>
                    <p className='text-4xl font-semibold mt-7'>Contact</p>

                    <div className='mt-8 flex justify-around'>
                        <div>
                            <p className='font-bold'>Address:</p>
                            <p className='text-slate-500'>121 King St, Melbourne VIC</p>
                            <p className='text-slate-500'>3000, Australia</p>
                        </div>
                        <div>
                            <p className='font-bold inline-block'>Telephone :</p>
                            <p className='inline-block text-slate-500'>888 321 9874</p><br />
                            <p className='font-bold inline-block'>Email :</p>
                            <p className='inline-block text-slate-500'>info@example.com</p>
                        </div>
                    </div>

                    <div className='mt-9'>
                        <p className='text-red-600  font-semibold'>Need Help</p>
                        <p className='font-semibold  text-5xl'>Send Your Request</p>
                        <div>
                            <div>
                                <input type="text" placeholder='Name' className='border-2  border-solid border-inherit  min-w-[600px] h-12 mt-8' />
                            </div>
                            <div>
                                <input type="text" placeholder='Email Address' className='border-2  border-solid border-inherit  min-w-[600px] h-12 mt-8' />
                            </div>
                            <div>
                                <input type="text" placeholder='Phone' className='border-2  border-solid border-inherit  min-w-[600px] h-12 mt-8' />
                            </div>
                            <div>
                                <textarea name="" id="" className='border-2  border-solid border-inherit  min-w-[600px]  mt-8' cols="20" rows="10" placeholder='Massage'></textarea>
                            </div>
                            <div>
                                <button className='border-2 border-solid  border-black min-w-[600px] h-12 mt-8 text-white bg-black'>Send Message</button>
                            </div>


                        </div>
                    </div>
                </div>
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

export default ContactTwo
