import React from 'react'
import bg1 from'../assets/bigdish.png'
export default function About() {
  return (
    <div className='  bg-gray-200 flex  justify-around items-center px-[6.4rem]   '>

        <div className="">

            <img className='  ' src={bg1} alt="" />
        </div>

        <div className=" space-y-7">
            <h1 className=' text-[3rem] font-semibold  '>Welcome to Our <br /> Restaurant</h1>
            <p></p>
            Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit, sed do eiusmod tempor incididunt <br />
             ut labore et dolore magna aliqua.
             <div className=" space-x-4">
                    <button className='py-3 px-7 bg-[#101A24] text-white rounded-tl-[0.5rem] 
                    rounded-br-[0.5rem] font-semibold   '>Menu</button>
                    <button className='py-3 px-7 bg-[#EA6D27] text-white rounded-tl-[0.5rem] 
                    rounded-br-[0.5rem] font-semibold   '>Book a table</button>
                </div>
        </div>
        
    </div>
  )
}
