import bg from '../../../assets/destination/background-destination-mobile.jpg';
import bgM from '../../../assets/destination/background-destination-tablet.jpg';
import bgL from '../../../assets/destination/background-destination-desktop.jpg';
import logo from '../../../assets/shared/logo.svg';
import ham from '../../../assets/shared/icon-hamburger.svg';
import { Link } from 'react-router-dom';
import cross from '../../../assets/shared/icon-close.svg';
import React, { useState } from 'react';
import Data from '../../../data.json';
import moon from '../../../assets/destination/image-moon.png'
import mars from '../../../assets/destination/image-mars.png'
import europa from '../../../assets/destination/image-europa.png'
import titan from '../../../assets/destination/image-titan.png'


export const Destination = () => {

  const [menuClicked, setMenuClicked] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(0);

  const planetImages = [moon, mars, europa, titan];

  const handlePlanetClick = (index) => {
    setSelectedPlanet(index);
  }

  const planetSelect = Data.map(data => {
    return (
      data.destinations.map((info, index) => {
        return (
          <button 
          onClick={() => handlePlanetClick(index)}
          key={index} 
          className='hover:text-white uppercase hover:border-b-solid hover:border-b-2 h-[2rem]
          duration-75 ease-out focus:border-b-solid focus:border-b-2 pb-3 mt-[-1.5rem] md:text-[1.1rem]
          tracking-widest font-mono 2xl:text-[1.2rem] 2xl:ml-4'>
            {info.name}
          </button>
        )
      })
    )
  })

  const planetInfo = selectedPlanet !== null && (
    <>
    <div className='lg:text-[1.1rem]' id="text-wrapper">
      <h1 
      className='text-white tracking-wider font-serif
      text-[3rem] pt-4 lg:text-[4rem] 2xl:text-[5rem]'>{Data[0].destinations[selectedPlanet].name}</h1>
      
      <p className='text-[#a3a2a2] leading-relaxed lg:leading-loose relative top-[-1.5rem]
      '>{Data[0].destinations[selectedPlanet].description}</p>
    </div>

    <hr className='opacity-[25%] pb-5 sm:w-[25rem] md:w-[36rem] lg:w-[25rem]'/>

    <div className="flex flex-row space-x-[5rem] text-[#cdcccc] font-sans w-[25rem] uppercase text-[1.2rem]
    tracking-wider pt-2 md:text-[1.5rem]" id="arrival">
      <div id="distance" className='flex flex-col'> <span className='text-[#8a8989] pb-2 text-[.9rem]'>AVG. DISTANCE</span> 
      {Data[0].destinations[selectedPlanet].distance}</div>
      <div id="time" className='flex flex-col'> <span className='text-[#a3a2a2] pb-2 text-[.9rem]'>EST. TRAVEL TIME</span> 
      {Data[0].destinations[selectedPlanet].travel}</div>
    </div>
    </>
  )

  return (
    <>
    <div id="container">
      <img src={bg} alt="bg" className='w-full h-full absolute lg:hidden'/>
      <img src={bgM} alt="bgM"  className='w-full h-full absolute hidden lg:block 2xl:hidden'/>
      <img src={bgL} alt="bgL" className='w-full h-full absolute hidden 2xl:block'/>

      <nav className='relative p-9 opacity-[90%]'>

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
          hover:pr-3 focus:text-yellow-400'>home</Link>
          <Link to={'/Destination'}
          className='hover:border-r-yellow-500 hover:border-r-solid hover:border-r-[4px] duration-200
          hover:pr-3 focus:text-yellow-400'>destination</Link>
          <Link to={'/Crew'}
          className='hover:border-r-yellow-500 hover:border-r-solid hover:border-r-[4px] duration-200
          hover:pr-3 focus:text-yellow-400'>crew</Link>
          <Link to={'/Technology'}
          className='hover:border-r-yellow-500 hover:border-r-solid hover:border-r-[4px] duration-200
          hover:pr-3 focus:text-yellow-400'>technology</Link>
        </li>

      </ul>
    </div>

    <div className={`flex flex-col relative top-[-2.5rem] md:top-[-5rem] m-auto w-[30rem] sm:w-[35rem] p-[1.5rem]
    md:w-[45rem] lg:w-[62rem] md:left-[2rem] lg:p-0 lg:top-[4rem] lg:left-[4rem] xl:w-[70rem] xl:left-[15rem]
    xl:top-[3rem] 2xl:w-[80rem] 2xl:left-[19rem] 2xl:top-[1rem] ${menuClicked ? 'hidden' : 'block'}`} id="destination-table">

      <div className="text-[.8rem] w-[25rem] m-auto pl-4 sm:pl-0 md:ml-[3rem] md:mt-[-.5rem] lg:ml-[-2rem]
      lg:mb-[3rem] xl:text-[1rem] xl:w-[30rem] xl:ml-[-15rem] 2xl:ml-[-20rem]" id="header-text">
        <h1 className='text-white'><span className='text-[#6a6969] pr-2 font-sans tracking-tighter'>01</span>
        PICK YOUR DESTINATION</h1>
      </div>

      <div className="flex flex-row z-0 relative top-[24.2rem] left-[-.2rem] sm:top-[26rem] pb-[3.5rem] md:p-0
      md:top-[27.5rem] lg:top-[0rem] lg:left-[26.5rem]" id="planet-selection">
        <ul 
        className='flex flex-row space-x-10 sm:space-x-[4rem] md:space-x-[7rem] text-[#c9c7c7] tracking-widest uppercase
        mt-10 ml-[3rem] lg:space-x-[3rem]'>
          {planetSelect}
        </ul>
      </div>

      <div className='flex flex-col lg:flex-row' id='image&info'>
        <div className="relative left-[2.5rem] top-[-5.3rem] sm:left-[3.5rem] md:left-[7.5rem] md:mt-[2rem] md:top-[-4.5rem]
        lg:left-[-3rem] lg:top-[-2rem] xl:left-[-12rem] 2xl:left-[-15rem]" id="planet-image">
          {selectedPlanet !== null && (
            <img src={planetImages[selectedPlanet]} alt={Data[0].destinations[selectedPlanet].name}
            className='w-[21rem] h-[21rem] sm:w-[23rem] sm:h-[23rem] md:w-[26rem] md:h-[26rem] lg:w-[26.5rem] lg:h-[26.5rem]
            2xl:w-[31rem] 2xl:h-[31rem]'></img>
          )}
        </div>
      
        <div className="p-11 mt-[-5.3rem] md:pt-12 lg:w-[31rem] lg:space-y-[1.5rem] 2xl:ml-[-3rem]" id="planet-info">
          {planetInfo}
        </div>
        
      </div>

    </div>

  </div> 
    </>
  )
}
