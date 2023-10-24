import React, { useState } from 'react';
import bgS from '../../../assets/crew/background-crew-mobile.jpg';
import bgM from '../../../assets/crew/background-crew-tablet.jpg';
import bgL from '../../../assets/crew/background-crew-desktop.jpg';
import Data from '../../../data.json';
import douglas from '../../../assets/crew/image-douglas-hurley.png';
import mark from '../../../assets/crew/image-mark-shuttleworth.png';
import victor from '../../../assets/crew/image-victor-glover.png';
import anoush from '../../../assets/crew/image-anousheh-ansari.png';
import logo from '../../../assets/shared/logo.svg';
import ham from '../../../assets/shared/icon-hamburger.svg';
import { Link } from 'react-router-dom';
import cross from '../../../assets/shared/icon-close.svg';

export const Crew = () => {

  const [menuClicked, setMenuClicked] = useState(false);
  const [personClicked, setPersonClicked] = useState(0);

  const personelPhotos = [douglas, mark, victor, anoush];

  const handleClickedPerson = index => {
    if (personClicked !== null) {
      setPersonClicked(index)
    }
  }

  const personInfo = Data.map((data) => {
    return(
      personClicked !== null && data.crew[personClicked] && (
        <div className="flex flex-col lg:flex-row space-y-10 relative md:top-[-6rem]" id='info-content' key={personClicked}>
          <div className="space-y-6 relative top-[-9.5rem] sm:top-[-9rem] lg:top-[12rem] lg:left-[2rem]
          xl:top-[12rem] 2xl:space-y-9 2xl:top-[5rem]" id="texts">
            <div className='uppercase text-[1.3rem] text-[#6c6b6b] font-serif tracking-widest md:text-[1.4rem]
            2xl:text-[1.7rem]' id="role">
              {data.crew[personClicked].role}
            </div>
          
            <div className='text-white font-serif tracking-widest text-[2rem] uppercase pb-3 w-[35rem]
            md:text-[2.1rem] xl:text-[2.3rem] 2xl:text-[2.8rem]' id="name">
              {data.crew[personClicked].name}
            </div>
          
            <div className='text-[#aeacac] leading-normal md:text-[1.1rem] lg:w-[28rem]' id="bio">
              {data.crew[personClicked].bio}
            </div>
          </div>

          <div className='relative top-[-6.5rem] left-[1rem] sm:left-[0] sm:top-[-5rem] md:top-[-8rem] lg:left-[-5.5rem]
          lg:top-[1.5rem] xl:top-[-3.5rem] xl:left-[1rem] 2xl:left-[6rem] 2xl:top-[-5rem] md:left-[4rem]' id="images">

          <img src={personelPhotos[personClicked]} className='w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] lg:w-[35rem]
          lg:h-[35rem] xl:w-[40rem] xl:h-[40rem] 2xl:w-[42rem] 2xl:h-[42rem]' 
          alt={data.crew[personClicked].name} />

          </div>
          
        </div>
      )
    )
  })

  const personSelection = Data.map(data => {
    return (data.crew.map((crewMember ,index) => {
      return (
        <div className="relative duration-100 top-[-39rem] sm:top-[-37rem] sm:left-1
        md:top-[-49rem] lg:top-[-11rem] lg:left-[2.2rem] xl:top-[-18rem] 2xl:top-[-21rem]" id="buttons">
          <button 
          onClick={() => handleClickedPerson(index)}
          className='rounded-full bg-gray-600 p-[.35rem] focus:bg-white hover:bg-[#a7a7a7] duration-100'></button>
        </div>
      )
    }))
  })

  return (
      <>
      <div id="container">
      <img src={bgS} className='w-full h-full absolute lg:hidden' alt="bgS" />
      <img src={bgM} alt="bgM" className='w-full h-full absolute hidden md:block xl:hidden'/>
      <img src={bgL} alt="bgL" className='w-full h-full absolute hidden xl:block' />
      
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

    <div className='m-auto w-[31rem] sm:w-[33rem] md:w-[41rem] lg:w-[65rem] xl:w-[75rem]' id="crew-table">

      <div className='relative text-[1.4rem] left-[2.5rem] mt-5 pb-5 md:top-[-3.5rem]
      md:text-[1.6rem] lg:p-0 lg:left-[2.3rem] lg:top-[1rem] lg:text-[1.8rem] 2xl:top-[2rem]' id="header-text">
        <h4 className='text-white font-mono tracking-widest'>
          <span className='text-[#696969] font-bold font-sans'>02</span> MEET YOUR CREW
        </h4>
      </div>

      <div className='relative top-[9.5rem] sm:top-[11rem] w-[30rem] text-start p-10 sm:w-[35rem] md:w-[45rem]
      lg:w-[80rem] lg:left-[-2.3rem] lg:top-[10.5rem]' id="info-table">
        {personInfo}
        <div className="flex flex-row space-x-5 lg:space-x-8" id="person-selection">
          {personSelection}
        </div>
      </div>

    </div>
    </>
  )
}
