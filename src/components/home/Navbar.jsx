import React, { useState } from 'react'
import logo from '../../assets/shared/logo.svg';
import ham from '../../assets/shared/icon-hamburger.svg';
import { Link } from 'react-router-dom';
import cross from '../../assets/shared/icon-close.svg';

export const Navbar = () => {
  
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
    <div id="container">

      <nav className='relative p-9'>

        <ul className='flex flex-row justify-between'>
          <img src={logo} className='md:w-[3rem] md:h-[3rem] md:mt-[-.5rem] lg:mt-[1.7rem] 2xl:ml-[2rem]' alt="logo"/>

          <hr className='text-white w-[40rem] opacity-[43%] relative top-[3rem] left-[4.5rem] z-[1001] hidden 2xl:block'/>
          
          <img src={ham} 
          onClick={() => {setMenuClicked(!menuClicked)}}
          alt="hamburger" 
          className='w-[2rem] h-[2rem] mt-[.8rem] hover:cursor-pointer md:hidden'/>

          <li className="uppercase space-x-8 text-[#c4c4c4] bg-[#121223]
          p-10 w-[28rem] h-[6.5rem] relative left-[2.2rem] top-[-2.3rem] opacity-[95%]
          tracking-tight hidden md:flex lg:w-[40rem] lg:p-[2rem] lg:top-0
          lg:pl-[3rem] lg:space-x-12 lg:py-[2rem] lg:h-[5.5rem] lg:opacity-[80%]
          lg:bg-[#131325] z-[1000] xl:w-[50rem] xl:pl-[7rem] 2xl:w-[55rem] 2xl:pb-[3.7rem]
        2xl:text-white 2xl:pl-[9rem]" 
          id="desktop-nav">

            <Link to={'/'} className='hover:text-white duration-200 hover:border-b-solid
            hover:border-b-[2px] pb-[3.9rem] lg:pb-[3.4rem] lg:flex lg:flex-row 2xl:hover:border-b-[3px]
            2xl:pb-[3.8rem] hover:tracking-wider'> <span className='font-bold hidden lg:block 
            mr-4 text-white text-[1.1rem] mt-[-.1rem]'>00</span>
            home</Link>

            <Link to={'/Destination'} className='hover:text-white duration-200 hover:border-b-solid
            hover:border-b-[2px] pb-[3.9rem] lg:pb-[3.4rem] lg:flex lg:flex-row 2xl:hover:border-b-[3px]
            2xl:pb-[3.8rem] hover:tracking-wider'> <span className='font-bold hidden lg:block 
            mr-4 text-white text-[1.1rem] mt-[-.1rem]'>01</span>
            destination</Link>

            <Link to={'/Crew'} className='hover:text-white duration-200 hover:border-b-solid
            hover:border-b-[2px] pb-[3.9rem] lg:pb-[3.4rem] lg:flex lg:flex-row 2xl:hover:border-b-[3px]
            2xl:pb-[3.8rem] hover:tracking-wider'> <span className='font-bold hidden lg:block 
            mr-4 text-white text-[1.1rem] mt-[-.1rem]'>02</span>
            crew</Link>

            <Link to={'/Technology'} className='hover:text-white duration-200 hover:border-b-solid
            hover:border-b-[2px] pb-[3.9rem] lg:pb-[3.4rem] lg:flex lg:flex-row 2xl:hover:border-b-[3px]
            2xl:pb-[3.8rem] hover:tracking-wider'> <span className='font-bold hidden lg:block 
            mr-4 text-white text-[1.1rem] mt-[-.1rem]'>03</span>
            technology</Link>
          </li>
        </ul>
        
      </nav>

    </div>

    <div 
    className={`relative bg-[#090b1d] top-[-7.5rem] h-auto w-full
    ${menuClicked ? 'visible' : 'hidden'}`} id="mobile-menu">

      <ul className='text-end flex justify-end p-3 py-10'>
        <img src={cross}
        onClick={() => {setMenuClicked(!menuClicked)}} 
        alt="cross" 
        className='w-[1.9rem] h-[1.9rem] relative left-[-10.5rem] top-1 hover:cursor-pointer'/>

        <li className='uppercase flex flex-col space-y-[12rem] text-[2rem] tracking-widest text-white font-mono w-[15rem]'>
          <Link to={'/'}
          className='hover:border-r-yellow-500 hover:border-r-solid hover:border-r-[4px] duration-200
          hover:pr-3'>home</Link>
          <Link to={'/Destination'}
          className='hover:border-r-yellow-500 hover:border-r-solid hover:border-r-[4px] duration-200
          hover:pr-3'>destination</Link>
          <Link to={'/Crew'}
          className='hover:border-r-yellow-500 hover:border-r-solid hover:border-r-[4px] duration-200
          hover:pr-3'>crew</Link>
          <Link to={'/Technology'}
          className='hover:border-r-yellow-500 hover:border-r-solid hover:border-r-[4px] duration-200
          hover:pr-3'>technology</Link>
        </li>

      </ul>

    </div>
</>
  )
}
