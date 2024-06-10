import React from 'react'
import Logo from'../assets/logo.png'


function Footer() {
  return (
    <div className=''>
    <div className=' flex   items-center pt-[-1rem] relative  justify-between mx-[8rem] h-[110vh]'>
        {/* logo */}
         <div className='pt-[-28rem]'>
            <img className=' absolute left-[-3rem]  ' src={Logo} alt="" />
            <h1 className=' text-[2rem] pl-[0.8rem] font-semibold  ' >Restaurant</h1>
            <p className='pt-[rem]'>lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore  <a className='underline' href="#">.Learn more</a>
            </p>
            
            <h1 className='pt-[5rem] font-bold'>Opening Hours</h1>
            <div className='grid grid-rows-1 grid-flow-col gap-7'>
                <div className='pt-[3rem]'>
                    <h1>Monday-Friday</h1>
                    <h1>8:00 am to 9:00 pm</h1>

                </div>
                <div className='pt-[3rem]'>
                    <h1>SATURDAY</h1>
                    <h1>8:00 am to 9:00 pm</h1>
                    

                </div>
                <div className='pt-[3rem]'>
                    <h1>SUNDAY</h1>
                    <h1>CLOSED</h1>

                </div>
             

            </div>

        </div>
        <div>
        </div>
      
       {/* navi */}
       <div className='grid grid-rows-1 grid-flow-col gap-4'>

       </div>
        
            <ul className='pt-[1rem] space-y-5'>
            <h1 className='font-bold'>Navigation</h1>

                <li><a href="">Menu</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Main dishes</a></li>

            </ul>
            <div>
            <ul className='pt-[1rem] space-y-5'>
            <h1 className='font-bold'>Dishes</h1>

                <li><a href="">Fish&Viggies</a></li>
                <li><a href="">Tofu chili</a></li>
                <li><a href="">Egg&Cocumber</a></li>
                <li><a href="">Lumpia w/Suace</a></li>

            </ul>
            
            </div>
            <div className=''>    
                <h1 className='font-bold ' >Follows</h1>
                <div className=" flex space-x-4 mt-[1rem]  ">
        <i class="border-[0.1rem] text-[1.3rem] border-black rounded-[50%] py-2 px-3
            fa-brands fa-facebook-f "></i>
        <i class="border-[0.1rem] text-[1.3rem] border-black rounded-[50%] py-2 px-3
            fa-brands fa-instagram "></i>
        <i class="border-[0.1rem] text-[1.3rem] border-black rounded-[50%] py-2 px-3
            fa-brands fa-x-twitter "></i>
       
        </div>
            </div>
            {/* <div className='underline-offset-8 size-10'>
                <h1>&copy; Restaurnaars</h1>
            </div> */}
            
      
    </div>
    </div>
    
  )
}

export default Footer
