import './Mainbanner.css'
import Banner from '../assets/Banner.png'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'
const MainBanner = () => {
  return (
    <div className='relative'>
        {/* <img src={Banner} alt="" className='Main-banner md:block'/> */}
        <img src={assets.main_banner_bg} alt="" className='w-full hidden md:block' />
        <img src={assets.main_banner_bg_sm} className='w-full md:hidden' alt="" />

        <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Freshness You can Trust, Savings You will Love!</h1>
        
        <div className='flex items-center mt-6 font-medium'>
            <Link className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-green-600 hover:bg-green-400 transition rounded cursor-pointer'> Shop Now  
            <img className='md:hidden transition group-focus:translate-x-1 ' src={assets.white_arrow_icon} alt="" />
             </Link>

            <Link className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'> Explore More Deals   
            <img className='md:hidden transition group-focus:translate-x-1 ' src={assets.black_arrow_icon} alt="" />
             </Link>

        </div>
        </div>
    </div>
  )
}

export default MainBanner