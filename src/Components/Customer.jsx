import React from 'react'
import bg11 from '../assets/Group.png'
import bg12 from '../assets/Stars.png'
import bg13 from '../assets/person1.png'

function Customer() {
  return (
    <div  className='bg-gray-200 pb-[13rem]'>
      <div className='pr-[198px]'>
      <div className='flex mt-[8rem]  relative justify-between mx-[8rem] pb-[8rem] bg-gray-200 h-[130vh]'>
        <img className='w-[48vw] absolute left-[-10rem] top-[4rem]' src={bg11} alt="" />

        <div className="relative text-center h-[20vh] left-[23rem] bottom-[-3rem]">
          <h1 className='text-[3.4rem] font-semibold whitespace-nowrap'>Our Happy Customer</h1>
          <p className='pt-[1rem]  pl-[7rem]'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt .</p>
        </div>

        <div className="flex  font-serif pt-[28rem] items-center gap-40">
          <div className='w-[500px] h-[350px] left-[20rem] bg-white rounded-tl-[3rem] rounded-br-[3rem] right-[-20rem] '>
            <img className='absolute top-[18.8rem] left-[43.4rem] rounded-[50%]' src={bg13} alt="" />
            <div className='left-[42.2rem] absolute bottom-[22rem]'>
              <img src={bg12} alt="" />
            </div>
            {/* content div */}
            <div className="text-center left-[35.2rem] space-y-[-1rem] pt-[6rem]">
              <p className='text-[1.1rem] text-gray-600'>Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper</p>
              <div className='space-y-'>
                <h1 className='font-bold mt-[4rem]'>Ama</h1>
                <p className=''>COA & Founder</p>
              </div>
            </div>
          </div>
          {/* <div>
          </div> */}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Customer
