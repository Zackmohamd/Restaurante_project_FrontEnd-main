import React from 'react'
import bg16 from '../assets/Maskgroup.png'
function Promo() {
  return (

    <div class="relative w-[150vh] mx-auto ">
      <img src={bg16} alt="" />
    <div class="absolute  bg-gray-700  rounded-md px-10"></div>
    <div class="absolute inset-0 flex items-center justify-center px-10 ">
        <h2 class="text-white text-4xl font-bold pb-16  pl-12">Get Or Promo code by<br/> Subscribing To our newsletter</h2><br/>
    </div>
    <div class="absolute pt-28 inset-0 flex items-center justify-center rounded-md ">
    {/* <input className='py-6 pr-[16rem] pl-[2rem] rounded-lg text-left-[10rem]' type="text"  placeholder='Enter your email' /> */}
    <input className='py-6 pr-[16rem] pl-[2rem] rounded-lg text-left-[10rem]' type="text"  placeholder='Enter your email'>
    </input>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Sign Up
    </button>
    </div>
</div>
  )
}

export default Promo
