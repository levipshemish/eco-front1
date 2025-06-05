import React from 'react'
import { GoClock } from "react-icons/go";
import { IoGiftOutline } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";



const Footer = () => {
  return (
    <div>
    <div className='mx-auto w-[65vw] flex flex-col gap-13 min-h-[90vh] mt-25'>
      <div className='flex flex-col gap-4'>
        <div className='text-4xl text-green-600'>
        <GoClock />
        </div>
    <div className='text-xl font-inter'>Less than 5 day Shipping</div>
    <div className='text-sm text-gray-600'>Enjoy lightning-fast shipping that gets your coffee to your door in no time.</div>
      </div>
      <div className='flex flex-col gap-2 '>
        <div className='text-4xl text-green-600'>
        <IoGiftOutline />
        </div>
    <div className='text-xl'>Best Prices & Offers</div>
    <div className='text-sm text-gray-600'>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-4xl text-green-600'>
        <FaBoxArchive />
        </div>
    <div className='text-xl'>Wide Assortment</div>
    <div className='text-sm text-gray-600'>Explore over 20+ different types of premium coffee beans sourced from the finest regions around the world.</div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-4xl text-green-600'>
        <GrPowerCycle />
        </div>
    <div className='text-xl'>Easy Returns</div>
    <div className='text-sm text-gray-600'>Not satisfied with a product? We do full returns, no questions asked.</div>
      </div>
      </div>
      <div className='bottom-0 w-full h-25 bg-[#F0F3F2] flex gap-3 justify-center items-center'>
      Levi Pshemish 2025. Made using <span className="text-[#05A63E]">React.</span>
            
            <a 
               href="https://linkedin.com/in/levipshemish" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-[#05A63E]"
           >
           <FaLinkedin />
           </a>
           <a 
               href="https://github.com/levipshemish" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-[#05A63E]"
           >
               <FaGithub />
           </a>
           <a 
               href="mailto:levifsengineer@gmail.com"
               className="hover:text-[#05A63E]"
           >
             <MdOutlineMail />
           </a> 
      </div>
    </div>
  )
}

export default Footer
