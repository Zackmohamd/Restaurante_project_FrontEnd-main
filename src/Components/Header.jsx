import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex items-center mt-[2rem] relative justify-between mx-[8rem]'>

        <div className="flex">
            <img className='absolute left-[-3rem] top-[-1rem]' src={Logo} alt="Logo" />
            <h1 className='text-[2rem] pl-[0.8rem] font-semibold'>Restaurant</h1>
        </div>

        <ul className="flex justify-center space-x-8 pr-[3rem]">
            <li className='list-none text-[1.3rem]'><Link className='hover:text-gray-500 hover:underline' to="/menu">Menu</Link></li>
            <li className='list-none text-[1.3rem]'><Link className='hover:text-gray-500 hover:underline' to="/events">Events</Link></li>
            <li className='list-none text-[1.3rem]'><Link className='hover:text-gray-500 hover:underline' to="/gallery">Gallery</Link></li>
            <li className='list-none text-[1.3rem]'><Link className='hover:text-gray-500 hover:underline' to="/About">About</Link></li>
            <li className='list-none text-[1.3rem]'><Link className='hover:text-gray-500 hover:underline' to="/contact">Contact</Link></li>
        </ul>

        <div>
            <button className='py-3 px-7 hover:bg-slate-500 bg-[#EA6D27] text-white rounded-tl-[0.5rem] rounded-br-[0.5rem]'>Book a table</button>
        </div>
    </div>
  );
}
