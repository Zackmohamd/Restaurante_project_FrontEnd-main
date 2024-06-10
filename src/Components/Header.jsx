import React from 'react'
import Logo from'../assets/logo.png'

export default function Header() {
  return (
    <div className=' flex  items-center mt-[2rem] relative  justify-between mx-[8rem]  '>

        <div className=" flex  ">
            <img className=' absolute left-[-3rem] top-[-1rem] ' src={Logo} alt="" />
            <h1 className=' text-[2rem] pl-[0.8rem] font-semibold  ' >Restaurant</h1>
        </div>

        <div className=" flex justify-center  space-x-8 pr-[3rem]  ">
            <li className='list-none text-[1.3rem]  '><a href="">Menu</a></li>
            <li className='list-none text-[1.3rem]  '><a href="">Events</a></li>
            <li className='list-none text-[1.3rem]  '><a href="">Gallery</a></li>
            <li className='list-none text-[1.3rem]  '><a href="">About</a></li>
            <li className='list-none text-[1.3rem]  '><a href="">Contact</a></li>
        </div>

        <div className="">
            <button className='py-3 px-7 bg-[#EA6D27] text-white  rounded-tl-[0.5rem] rounded-br-[0.5rem] '>Book a table</button>
        </div>
    </div>
  )
}
