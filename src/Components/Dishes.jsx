import React from 'react'
import bg2 from'../assets/imgbg2.png'
import bg3 from'../assets/imgbg3.png'
import dish1 from'../assets/dishone.png'
import dish2 from'../assets/dishtwo.png'
import dish3 from'../assets/dishthree.png'
import dish4 from'../assets/dishfour.png'
import bg4 from'../assets/Toon1.png'
import bg5 from'../assets/Toon2.png'
import bg6 from'../assets/laamo.png'
import bg9 from'../assets/basal.png'




export default function Dishes() {
 
  return (
    <div id='Dishes' className=' relative mt-[8rem]  bg-gray-200   '>
       
  
  <div className=" text-center  pt-[2rem]   ">
       <img className='w-[10vw] absolute  right-[19rem]  top-[2rem]  '  src={bg2} alt="" />
       <img className='w-[12vw] absolute left-[18rem]   '    src={bg3} alt="" />
       <div className=' space-y-4'>
       <h1 className=' text-[3rem] font-semibold   '>Our Special Dishes</h1>
        <p>  Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit, sed do eiusmod tempor incididunt </p>
       </div>
   
  </div>
       
       {/* Cards part */}
       <div className=" flex justify-center  items-center gap-4 h-[100vh]  ">

                   {/* Background Images Using Possitions */}

       <div className=" absolute right-[8.4rem] flex space-x-7 bottom-[7rem]  ">
                <img className=' ' src={bg4} alt="" />
                    <img className='' src={bg5} alt="" />
                 
                  
                </div>

                <div className="    ">
                <img className=' absolute left-[26.4rem] bottom-[4.6rem]  ' src={bg9} alt="" />
                <img className='absolute left-[38.5rem] bottom-[-2rem] ' src={bg6} alt="" />
        
                </div>
                    {/* Background Images Using Possitions */}

                 
       
         
         <div className=" w-[265px] h-[309px] bg-white
          rounded-tl-[3rem] rounded-br-[3rem]      ">

             <img className='  absolute top-[15.8rem] left-[11.4rem]  ' src={dish1} alt="" />
             <div className="bg-black rounded-[50%] py-3 px-3 
             absolute left-[22.3rem] top-[18.5rem] text-white text-center font-semibold  ">$50</div>
             
               {/* content div */}
                  <div className=" text-center absolute bottom-[12rem]
                  left-[10.2rem] space-y-6  ">
                  <h1 className=' text-[1.5rem] font-semibold  '>Lumpia with Suace</h1>
                  <p className=' text-[1.1rem] text-gray-600  '>Lorem ipsum dolor sit <br /> consectetur adipiscing
                     elit, sed <br /> do eiusmod tempor </p>
                  </div>
               
                     {/* content div */}

          </div>


         <div className=" w-[265px] h-[309px] bg-gray-200  border-2 border-white
         rounded-tl-[3rem] rounded-br-[3rem]  ">

              <img className=' mx-auto  absolute top-[15.8rem] left-[28.7rem]  ' src={dish2} alt="" />
             <div className="bg-black rounded-[50%] py-3 px-3 
             absolute left-[39.9rem] top-[18.5rem] text-white text-center font-semibold  ">$10</div>
             
               {/* content div */}
                  <div className=" text-center absolute bottom-[12rem]
                  left-[28rem] space-y-6  ">
                  <h1 className=' text-[1.5rem] font-semibold  '>Fish and Veggie</h1>
                  <p className=' text-[1.1rem] text-gray-600  '>Lorem ipsum dolor sit <br /> consectetur adipiscing
                     elit, sed <br /> do eiusmod tempor </p>
                  </div>
               
                     {/* content div */}

   

         </div>


         
         <div className=" w-[265px] h-[309px] bg-gray-200 border-2 border-white
          rounded-tl-[3rem] rounded-br-[3rem]   ">

<img className='  absolute top-[15.8rem] right-[28.2rem]  ' src={dish3} alt="" />
             <div className="bg-black rounded-[50%] py-3 px-3 
             absolute right-[27rem] top-[18.5rem] text-white text-center font-semibold  ">$25</div>
             
               {/* content div */}
                  <div className=" text-center absolute bottom-[12rem]
                  right-[27.4rem] space-y-6  ">
                  <h1 className=' text-[1.5rem] font-semibold  '>Tofu Chili</h1>
                  <p className=' text-[1.1rem] text-gray-600  '>Lorem ipsum dolor sit <br /> consectetur adipiscing
                     elit, sed <br /> do eiusmod tempor </p>
                  </div>
               
                     {/* content div */}

          </div>


         <div className=" w-[265px] h-[309px] bg-gray-200 border-2 border-white
          rounded-tl-[3rem] rounded-br-[3rem]   ">

        <img className='  absolute top-[15.8rem] right-[10.5rem]  ' src={dish4} alt="" />
             <div className="bg-black rounded-[50%] py-3 px-3 
             absolute right-[9.2rem] top-[18.5rem] text-white text-center font-semibold  ">$15</div>
             
               {/* content div */}
                  <div className=" text-center absolute bottom-[12rem] 
                 right-[10.2rem] space-y-6  ">
                  <h1 className=' text-[1.5rem] font-semibold  '>Egg and Cocumber</h1>
                  <p className=' text-[1.1rem] text-gray-600  '>Lorem ipsum dolor sit <br /> consectetur adipiscing
                     elit, sed <br /> do eiusmod tempor </p>
                  </div>
               
                     {/* content div */}
          </div>
       </div>

   



                     {/* New Section What Abou Dish */}

                     <div className="">

                           <div className="">
                            <img src="" alt="" />
                           </div>

                     </div>
                       {/* New Section What Abou Dish */}
    </div>
  )
}
