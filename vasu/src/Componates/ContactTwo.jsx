import React from 'react'
import asset56 from '../assets/asset 56.svg'
import asset57 from '../assets/asset 57.svg'
import asset58 from '../assets/asset 58.svg'
import asset59 from '../assets/asset 59.svg'
import asset60 from '../assets/asset 60.svg'
import asset51 from '../assets/asset 51.svg'
import assset52 from '../assets/asset 52.svg'
import assset53 from '../assets/asset 53.svg'
import assset54 from '../assets/asset 54.svg'
import assset55 from '../assets/asset 55.svg'



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

      <footer>
        <div>
          <div className='mt-24 xl:flex xl:justify-center lg:flex lg:justify-center md:flex md:justify-center max-sm:flex max-md:justify-center'>
            <img src={asset51} alt="" />
          </div>

          <p className='xl:text-center lg:text-center md:text-center max-sm:text-center mt-3 text-3xl font-semibold text-wrap'>Subscribe newsletter</p>
          <p className='xl:text-center lg:text-center md:text-center max-sm:text-center mt-3 text-md text-slate-500'>Subscribe Now and get more offers</p>

          <div className='xl:flex xl:justify-center lg:flex lg:justify-center md:flex-wrap md:text-center max-sm:flex max-sm:flex-wrap max-sm:justify-center mt-5'>
            <input className='border-2 border-solid border-inherit p-2 bg-slate-200 xl:w-[400px]  lg:w-[400px] md:w-[400px]   max-sm:w-[350px] ' placeholder='Your Email Address...' type="text" name="" id="" />
            <button className='bg-black text-white xl:p-3 md:p-2 lg:p-3 max-sm:p-2 xl:w-[220px] lg:w-[220px] lg:ms-3 md:ms-3 xl:ms-3  max-sm:ms-1 max-sm:mt-3 max-sm:w-[350px] '> Subscribe Now</button>
          </div>

          <div className='mt-28'>
            <hr />
          </div>


          <div className='xl:flex lg:flex lg:justify-betwee md:flex md:justify-between xl:justify-between max max-sm:justify-center'>
            <div className='xl:flex xl:mt-4 md:flex md:gap-1 lg:flex lg:gap-3 xl:gap-3 max-sm:flex max-sm:justify-center max-sm:gap-2 max-sm:mt-3'>
              <img className='w-9' src={assset52} alt="" />
              <img className='w-9' src={assset53} alt="" />
              <img className='w-9' src={assset54} alt="" />
              <img className='w-9' src={assset55} alt="" />
            </div>
            <div className='mt-4 max-sm:flex max-sm:justify-center'>
              <p className='inline-block text-slate-500'>Designed by : </p>
              <p className='inline-block font-bold text-slate-500'>Wpignite</p>
            </div>
            <div className='xl:flex lg:flex md:flex md:gap-2 xl:gap-3 lg:gap-2  max-sm:flex  max-sm:justify-center  max-sm:gap-1 max-sm:mt-3'>
              <img src={asset56} alt="" />
              <img src={asset57} alt="" />
              <img src={asset58} alt="" />
              <img src={asset59} alt="" />
              <img src={asset60} alt="" />
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default ContactTwo
