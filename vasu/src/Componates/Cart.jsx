import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import asset51 from '../assets/asset 51.svg'
import assset52 from '../assets/asset 52.svg'
import assset53 from '../assets/asset 53.svg'
import assset54 from '../assets/asset 54.svg'
import assset55 from '../assets/asset 55.svg'
import asset56 from '../assets/asset 56.svg'
import asset57 from '../assets/asset 57.svg'
import asset58 from '../assets/asset 58.svg'
import asset59 from '../assets/asset 59.svg'
import asset60 from '../assets/asset 60.svg'




const Cart = () => {




  var cartData = useSelector((state) => state.reducer);
  amount = 0;
  var amount =
    cartData.length &&
    cartData.map((item) => item.d_price).reduce((prev, next) => prev + next);

  return (
    <>
      <div className='max-sm:hidden' >
        <p className='text-center text-white bg-amber-700 p-1'>Free delivery on orders over $1499. Don’t miss discount.</p>
      </div>
      <div className='container xl:p-5'>

        <div className=' p-6 xl:w-full lg:w-full md:w-full sm:w-full shadow-md shadow-gray-500 mt-5'>
          <p className=''>Your Cart is currently empty.</p>
        </div>

        <div className='bg-black  text-white xl:h-12 lg:h-12 md:h-12 sm:h-12 xl:max-w-[250px] lg:max-w-[250px] md:max-w-[240px] max-sm:w-[220px] max-sm:p-1 mt-5 p-2 px-5 py-2  duration-500 ease-in-out hover:-translate-y-3'>
          <NavLink className to='/shop_Now'>
            <p className='mt-1 ms-3 '>Return To Shop</p>
          </NavLink>
        </div>
        <div className=" container mx-auto justify-between  mt-4 ">
          <table className="xl:w-full  lg:w-full md:w-full max-sm:w-full">
            <thead className='border-2 border-solid border-red-500  bg-orange-300'>
              <tr className="flex row justify-between pb-[20px] pt-[30px] px-[20px]">
                <th className="col-6  font-normal ">Products</th>
                <th className="col-2 font-normal">Price</th>
                <th className="col-2 font-normal">Quantity</th>
                <th className="col-2 font-normal">Total</th>
              </tr>
            </thead>
            <hr />
            {cartData.map((item) => {
              return (
                <tbody key={item.id} className='border-2 border-current border-solid bg-pink-700'>
                  <tr className="flex justify-between pt-[30px] items-center py-[30px] ">
                    <td className="flex col-6 items-center">
                      <img
                        className="max-w-[102px] w-[102px] h-[102px] col-6 object-cover  border-2 border-solid border-black"
                        src={item.img}
                        alt=""
                      />
                      <td className="col-6 text-white">{item.name}</td>
                    </td>
                    <div class="border-l border-black h-full"></div>
                    <td className="col-2 text-white">{item.d_price}</td>
                    <td className="col-2 text-white">1</td>
                    <td className="col-2 text-white">{item.d_price}</td>
                  </tr>
                  <hr />
                </tbody>
              );
            })}
          </table>

          <div className="">


            <div className="p-[25px] border-2 border-spacing-1 mt-3 border-solid w-full bg-orange-800 font-extrabold">
              <h4 className="my-[8px] text-white">Cart Totals</h4>
              <hr className='text-white font-extrabold' />
              <div className="flex justify-between mt-[30px] mb-[20px]">
                <span className='text-white font-extrabold'>Subtotal</span>
                <span className='text-yellow-300 font-extrabold'>
                  {amount}
                </span>

              </div>
              <hr className='text-white font-extrabold' />
              <div className="leading-10 my-[15px]">
                <h1 className='text-white font-extrabold'>Shipping</h1>
                <div className="flex justify-between">
                  <span className='text-white font-extrabold'>Flat Rate:</span>
                  <span></span>
                </div>
                <div className='text-white font-extrabold'>
                  Shipping to <sapn className="font-bold">CA</sapn>
                </div>
                <h4 className='text-white font-extrabold'>Change address </h4>
              </div>
              <hr className='text-white font-extrabold' />
            </div>
          </div>
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
    </>
  )
}

export default Cart
