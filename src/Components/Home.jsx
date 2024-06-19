import React from 'react'
import bg1 from'../assets/imgbg1.png'
import bg2 from'../assets/imgbg2.png'
import bg3 from'../assets/imgbg3.png'
import bg4 from'../assets/Mask.png'
import bg5 from'../assets/dish.png'
import bg6 from'../assets/text.png'
export default function Home() {
  return (
    <div  id="Home" className='flex mt-[11rem] relative justify-between mx-[8rem]  '>
         <img className=' sm:absolute top-[-4.8rem] left-[-2.4rem]   ' src={bg6} alt="" />

        <div className=" space-y-[3rem] relative top-[5.6rem]   ">
            <h1 className='text-[3.4rem] font-semibold   '>  We provide the <br /> best food for you</h1>
            <p className='mt-[2rem] space-y-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> 
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className=" space-x-4">
                    <button className='py-3 px-7 hover:bg-slate-500 bg-[#101A24] text-white rounded-tl-[0.5rem] 
                    rounded-br-[0.5rem] font-semibold   '>Menu</button>
                    <button className='py-3 px-7 hover:bg-slate-500 bg-[#EA6D27] text-white rounded-tl-[0.5rem] 
                    rounded-br-[0.5rem] font-semibold   '>Book a table</button>
                </div>
                <div className=" flex space-x-4 mt-[1rem]  ">
        <i class="border-[0.1rem] text-[1.3rem] border-black rounded-[50%] py-2 px-3
            fa-brands fa-facebook-f hover:bg-blue-500 hover:text-white "></i>
        <i class="border-[0.1rem] text-[1.3rem] border-black rounded-[50%] py-2 px-3
            fa-brands fa-instagram hover:bg-red-300 "></i>
        <i class="border-[0.1rem] text-[1.3rem] border-black rounded-[50%] py-2 px-3
            fa-brands fa-x-twitter hover:bg-black hover:text-white "></i>
    
        </div>
       

        </div>

        <div className=" ">

         {/* div images */}
              <div className="">
              
                <img className='h-[85vh]  ' src={bg4} alt="" />
                <img className=' absolute  bottom-[1.3rem]  right-[20rem] w-[20vw]  ' src={bg5} alt="" />
              </div>
              
          {/* div images */}
          

        </div>
                <img style={{zIndex:-1}} className=' absolute right-[13rem] top-[-4.9rem]  ' src={bg1} alt="" />
                <img style={{zIndex:-1}} className=' absolute bottom-[-0.4rem] right-[-8.4rem] ' src={bg2} alt="" />
                <img style={{zIndex:-1}} className='  absolute top-[-7.4rem] right-[-6.9rem] ' src={bg3} alt="" />

       
    </div>
  )
}


