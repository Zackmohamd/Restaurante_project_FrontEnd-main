import React from 'react'
import bg7 from'../assets/Toon1.png'
import bg8 from'../assets/Toon2.png'
import bg9 from'../assets/chief1.png'
import bg10 from'../assets/Goup1.png'



function Expert() {
  return (
        <div  className=' flex mt-[8rem] relative justify-between mx-[8rem]  '>
         <div className="font-serif">
  <img className='w-[10vw] absolute  left-[-14rem]    '  src={bg7} alt="" />
  <img className='w-[10vw] absolute  left-[-4rem]  top-[-2rem]  '  src={bg8} alt="" />

        <div className=" space-y-[3rem] relative    ">
            <h1 className='text-[3.4rem] font-semibold   '>  Our Expects Chef</h1>
            <p className='pt-[-10rem] space-y-2 top-[-1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> 
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                  <div>
                  <img src={bg10} alt="" />
                  </div>
                  
                  <div>
                  <img src={bg10} alt="" />
                  </div>
                  <div>
                  <img src={bg10} alt="" />
                  </div>
                  <div>
                  <img src={bg10} alt="" />
                  </div>
                  <div>
                  <img src={bg10} alt="" />
                  </div>
                  <div>
                  <img src={bg10} alt="" />
                  </div>
  
                </div>
             
                <div className=" space-x-8">
                    <button className='py-3  px-7 hover:bg-slate-500 bg-[#101A24] text-white rounded-tl-[0.5rem] 
                    rounded-br-[0.5rem] font-semibold   '>Menu</button>
                    <button className='py-3 px-7 hover:bg-slate-500 bg-[#EA6D27] text-white rounded-tl-[0.5rem] 
                    rounded-br-[0.5rem] font-semibold   '>Book a table</button>
                </div>
                </div>
                </div>
                <div className=' '>
                  
                    <img className='' src={bg9} alt="" />

                
                </div>
                </div>

   
  )
}


export default Expert
