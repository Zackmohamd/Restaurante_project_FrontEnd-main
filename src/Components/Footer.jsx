import React from 'react'
import Logo from'../assets/logo.png'
import bg15 from'../assets/Group.png'




function Footer() {
  return (
    <div className=''>
      
    <div className=' flex   items-center  relative  justify-between mx-[8rem] h-[110vh]'>
        {/* logo */}

         <div className='pb-[22rem]'>
            <img className=' absolute left-[-3rem]  pt-[-10rem] ml-[2rem]' src={Logo} alt="" />
            <h1 className=' text-[2rem] pl-[0.8rem] font-semibold pt-[-10rem] ml-[2rem]  ' >Restaurant</h1>
            <p className='pt-[1.5rem] text-gray-500'>lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore  <a className='underline' href="#">.Learn more</a>
            </p>
            
            <h1 className='pt-[5rem] font-bold  '>Opening Hours</h1>
            <div className='grid grid-rows-1 grid-flow-col gap-7'>
                <div className='pt-[3rem]  text-gray-500'>
                    <h1>Monday-Thursday</h1>
                    <h1>8:00 am to 9:00 pm</h1>

                </div>
                <div className='pt-[3rem] text-gray-500'>
                    <h1>Saturday</h1>
                    <h1>8:00 am to 9:00 pm</h1>
                    

                </div>
                <div className='pt-[3rem]  text-gray-500'>
                    <h1>Friday</h1>
                    <h1>Closed</h1>

                </div>
             

            </div>

        </div>
        <div>
        </div>
      
       {/* navi */}
       <div className='grid grid-rows-1 grid-flow-col gap-4 pb-[11rem]'>

        
            <ul className='pb-[13rem] space-y-5 '>
            <h1 className='font-bold '>Navigation</h1>

                <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Home</a></li>
                <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Dishes</a></li>
                <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">About</a></li>
                <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Expert</a></li>
                <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Customer</a></li>


                <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Contact us</a></li>

            </ul>
            </div>

            <div className='pb-[11rem]'>
            <ul className='pb-[13rem] space-y-5'>
            <h1 className='font-bold'>Dishes</h1>
            <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline ' href="">Fish&Viggies</a></li>
            <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Tofu chili</a></li>
            <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Egg&Cocumber</a></li>
            <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Lumpia w/Suace</a></li>
            <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Beef Enchiladas.</a></li>
            <li className=' text-gray-500'><a className='hover:text-gray-900 hover:underline' href="">Favorite Meatloaf</a></li>


            </ul>
            
            </div>
            <div className='pb-[36rem]'>    
                <h1 className='font-bold ' >Connect with us</h1>
                <div className=" flex space-x-4 mt-[2rem]  ">
        <i class="border-[0.1rem] text-[1.3rem] border-black rounded-[50%] py-2 px-3
            fa-brands fa-facebook-f  hover:bg-blue-500 hover:text-white"></i>
        <i class="border-[0.1rem] text-[1.3rem] border-black rounded-[50%] py-2 px-3
            fa-brands fa-instagram hover:bg-red-300"></i>
        <i class="border-[0.1rem] text-[1.3rem] border-black rounded-[50%] py-2 px-3
            fa-brands fa-x-twitter hover:bg-black hover:text-white "></i>
       
        </div>
            </div>
          

      
    </div>
<div className="flex justify-center  ">
    <hr className="h-px w-[213vh]	py-[-10rem]	 bg-gray-200 border-0 dark:bg-gray-700  mb-4 mx-auto" />
</div>
<div className="sm:flex sm:items-center sm:justify-between pt-3 px-12 pb-[10rem]" >
          <span className="text-sm  sm:text-center dark:text-gray-400 px-12">© 2024 Restaurant™. All Rights Reserved Designed by Zack.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                 
                  <span className="hover:text-blue-300 hover:underline">Terms of Service</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-7">
                  
                  <span className="hover:text-blue-300 hover:underline">Privacy Policy</span>
              </a>
              </div>
              </div>
    </div>
    
  )
}

export default Footer
