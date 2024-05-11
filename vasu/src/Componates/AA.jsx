import React from 'react'
import assset27 from '../assets/asset 27.svg'
import assset28 from '../assets/asset 28.svg'
import assset29 from '../assets/asset 29.svg'


const AA = () => {
    return (
        <>
            <div className='col-6 col-md-4 px-2 col-xs-6 relative'>
                <div className='absolute right-5 top-3 z-10 max-md:hidden'>
                    <span className='text-white bg-black px-2'>-20%</span>
                </div>
                <div className='relative primary-img'>
                    <div className='overflow-hidden relative'>
                        <img decoding="" loading="" alt="custom-image" src="  https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" />
                    </div>
                    <div className='absolute left-0 top-0 z-10 shop-icon'>
                        <div className='p-3'>
                            <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                                <a href="" className=''>
                                    <img src={assset27} alt="" height={16} width={16} />
                                </a>
                            </div>
                            <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                                <a href="">
                                    <img src={assset28} alt="" height={16} width={16} />
                                </a>
                            </div>
                            <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                                <a href="">
                                    <img src={assset29} alt="" height={8} width={12} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center leading-10 px-[12px] py-[23px] max-md:px-0 max-sm:py-[20px]'>
                    <h5>Monstera Plant</h5>
                    <p className='text-muted '>
                        <del className='pr-[8px]'>$60</del>
                        <span>$48</span>
                    </p>
                </div>
            </div>
        </>

    )
}

export default AA
