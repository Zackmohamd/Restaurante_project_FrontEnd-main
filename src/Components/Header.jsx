
import React from 'react';
import Logo from '../assets/logo.png';

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div  className='flex items-center mt-[2rem] relative justify-between mx-[8rem]'>
      <div className="flex">
        <img className='absolute left-[-3rem] top-[-1rem] 
        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 
        ' src={Logo} alt="Logo" />
        <h1 className='text-[2rem] pl-[0.8rem] font-semibold'>Restaurant</h1>
      </div>
      <ul className="flex justify-center space-x-8 pr-[3rem]">
      <li className='list-none text-[1.3rem]'>
          <button className='hover:text-gray-500 hover:underline' onClick={() => scrollToSection('Home')}>
            Home
          </button>
        </li>
      <li className='list-none text-[1.3rem]'>
          <button className='hover:text-gray-500 hover:underline' onClick={() => scrollToSection('Dishes')}>
            Dishes
          </button>
        </li>
      <li className='list-none text-[1.3rem]'>
          <button className='hover:text-gray-500 hover:underline' onClick={() => scrollToSection('about')}>
            About
          </button>
        </li>
      <li className='list-none text-[1.3rem]'>
          <button className='hover:text-gray-500 hover:underline' onClick={() => scrollToSection('Expert')}>
            Expert
          </button>
        </li>

       
       
       
        <li className='list-none text-[1.3rem]'>
          <button className='hover:text-gray-500 hover:underline' onClick={() => scrollToSection('Customer')}>
            Customer
          </button>
        </li>
        <li className='list-none text-[1.3rem]'>
          <button className='hover:text-gray-500 hover:underline' onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </li>
        
      </ul>
      <div>
        <button className='py-3 px-7 hover:bg-slate-500 bg-[#EA6D27] text-white rounded-tl-[0.5rem] rounded-br-[0.5rem]'>
          Book a table
        </button>
      </div>
    </div>
  );
}

