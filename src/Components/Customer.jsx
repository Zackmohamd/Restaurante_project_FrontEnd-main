import React from 'react'
import bg11 from'../assets/Group.png'
import bg7 from'../assets/Toon1.png'
import bg8 from'../assets/Toon2.png'
import bg9 from'../assets/chief1.png'
import bg10 from'../assets/Goup1.png'
import bg12 from'../assets/Stars.png'
import bg13 from'../assets/person1.png'




import bg2 from'../assets/imgbg2.png'
import bg3 from'../assets/imgbg3.png'
import dish1 from'../assets/dishone.png'


function Customer() {
  return (
 
    <div className='bg-gray-200'>
    <div className=' flex mt-[8rem] relative justify-between mx-[8rem] pb-[8rem] bg-gray-200  h-[130vh]  '>
<img className='w-=[30vw] absolute  left-[-8rem]  top-[4rem] '  src={bg11} alt="" />

   <div className="  relative text-center h-[20vh] left-[24rem] bottom-[-2rem]  ">
       <h1 className='text-[3.4rem] font-semibold   '>  Our Happy Customer</h1>
       <p className='pt-[-10rem]  '>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do <br /> 
           eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
           </div>
           
      
           <div className=" flex font-serif pt-[28rem]   items-center gap-40  ">
           <div className='w-[500px] h-[350px] bg-white
            rounded-tl-[3rem] rounded-br-[3rem] right-[-20rem] '>
                             <img className='  absolute top-[18.8rem] left-[32.4rem] rounded-[50%] ' src={bg13} alt="" />
                             <div className='  left-[28.2rem] absolute bottom-[22rem]'>
                             <img  src={bg12} alt="" />
                             </div>
                               {/* content div */}
                     <div className=" text-center 
                     left-[35.2rem] space-y-[-1rem] pt-[6rem]">
                     <p className=' text-[1.1rem] text-gray-600  '>Lorem ipsum dolor sit amet consectetur. Tortor<br/> massa nisl quam sit. Vitae congue ultrices neque<br/> penatibus mi in quisque. Leo in cursus enim<br/> magnis ante. Proin iaculis platea ipsum sagittis ac<br/> eu aliquam quis. Ornare tincidunt tempus semper 
                   </p>
                    
                     <div className='space-y-'>
                    <h1 className=' font-bold mt-[2rem] '>zack</h1><br/>
                    <p className='mt-[-1.5rem]'>COA &Founder</p>

                   </div>
                      

                   </div>
            </div>
           <div>
            <h1></h1>
           </div>
    

           
           <div className='  items-center  h-[100vh]'>
             

           
           </div>
           
           </div>
    
           </div>
           </div>

           </div>

)
}

export default Customer
