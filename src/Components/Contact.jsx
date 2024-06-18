import React from 'react'
import bg16 from '../assets/Maskgroup.png'
function Contact() {
  return (

    <div id='Contact' className="relative w-[150vh] mx-auto top-[-8rem] ">
      <img src={bg16} alt="" />
    <div className="absolute inset-0 flex items-center justify-center px-10 ">
        <h2 class="text-white text-4xl font-bold pb-16  pl-12">Get Or Promo code by<br/> Subscribing To our newsletter</h2><br/>
    </div>
    <div class="absolute pt-28 inset-0 flex items-center justify-center rounded-md ">
    <input className='py-6 pr-[16rem] pl-[2rem] rounded-lg text-left-[10rem]' type="text"  placeholder='Enter your email'>
    </input>
    <button class=" absolute right-[15rem]   bg-orange-500 hover:bg-teal-700 border-orange-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-8 rounded-[0.5rem]" type="button">
      Sign Up
    </button>
    </div>
</div>
  )
}

export default Contact
