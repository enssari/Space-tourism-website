
import { Reaact, useState } from 'react'
import logo from '../../../assets/shared/logo.svg';
import ham from '../../../assets/shared/icon-hamburger.svg';
import { Link } from 'react-router-dom';
import cross from '../../../assets/shared/icon-close.svg';
import bgS from '../../../assets/technology/background-technology-mobile.jpg';
import Data from '../../../data.json';
import rocket from '../../../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceport from '../../../assets/technology/image-spaceport-portrait.jpg'
import capsule from '../../../assets/technology/image-space-capsule-portrait.jpg';

export const Tech = () => {

  const [menuClicked, setMenuClicked] = useState(false);
  const [vehicleClicked, setVehicleClicked] = useState(0);

  const vehicleImage = [rocket, spaceport, capsule];

  const handleVehicleClicked = index => {
    setVehicleClicked(index)
  }

  const vehicleInfo = Data.map((data) => {
    return (
      vehicleClicked !== null && (
      <div className="space-y-2 md:w-[30rem] lg:w-[85rem] xl:w-[100rem] lg:flex lg:flex-row-reverse" key={vehicleClicked} id="info">
        <div className="pb-12 sm:pb-7 md:mt-[-2rem] lg:ml-[-10rem] relative lg:left-[-39rem] xl:left-[-46rem] 2xl:left-[-38rem]
        2xl:top-[2rem]" id="vehicle-img">
          <img 
            className='w-[22rem] h-full sm:w-[28rem] md:w-[45rem] lg:w-[60rem]'
            src={vehicleImage[vehicleClicked]} 
            alt={data.technology[vehicleClicked].name} />
        </div>
        
          <h1 className='text-[.8rem] tracking-widest text-[#6c6b6b] lg:relative lg:left-[-64.3rem] lg:w-[20rem]
          lg:top-[4.5rem] xl:top-[6rem] xl:left-[-80.3rem] 2xl:text-[.9rem] 2xl:left-[-79rem]'>THE TERMINOLOGY...</h1>
        
          <div className="text-white font-serif text-[2.5rem] pb-4 uppercase lg:ml-[-5rem] lg:relative lg:top-[6rem]
          lg:w-[80rem] lg:left-[-24.3rem] xl:left-[-37.5rem] xl:top-[8rem] 2xl:text-[3.3rem] 2xl:left-[-36.2rem]" id="name">
            {data.technology[vehicleClicked].name}
          </div>

          <div className="text-[#b3b2b2] pb-10 relative sm:top-[-1rem] lg:left-[-9rem] lg:w-[40rem] lg:leading-normal
          xl:w-[55rem] lg:top-[12rem] xl:leading-loose xl:left-[-13rem] xl:top-[12rem] 2xl:text-[1.1rem] 2xl:top-[14rem]
          2xl:left-[-11.7rem]" id="description">
            {data.technology[vehicleClicked].description}
          </div>
      </div>
    ))
  })

  const vehicleSelect = Data.map((data) => {
    return (data.technology.map((vehicleName ,index) => {
      return (
        <div className="text-white" id="buttons">
          <button 
          onClick={() => handleVehicleClicked((index))}
          key={index}
          className='rounded-full p-5 border-solid border-[1px] border-[#545454] px-6
          hover:border-white duration-100 focus:border-white relative sm:top-[-1.7rem]
          md:top-[-3.2rem] lg:left-[-16.5rem] lg:top-[-26rem] xl:left-[-23rem] lg:p-6 lg:px-7
          xl:px-8 xl:text-[1.5rem] xl:top-[-28.7rem] 2xl:top-[-28rem] 2xl:px-9 2xl:p-7 
          2xl:left-[-25rem]'>{index + 1}</button>
        </div>
      )
    }))
  })

  return (
    <>
    <div id="container">
      <img src={bgS} alt="bgS" className='w-full h-full absolute'/>

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
 
    <div className="relative w-[30rem] m-auto sm:w-[38rem] md:w-[48rem]" id="technology-table">
      <div className="uppercase relative left-5 pb-10 md:top-[-2rem] md:mt-[-1.5rem] sm:left-[4.5rem]
      md:left-[7.5rem] lg:left-[-4.3rem] lg:top-[5rem] xl:left-[-12.5rem] 2xl:left-[-14.4rem]" id="header-text">
        <h4 className='text-white tracking-wider font-mono text-[1.3rem] lg:text-[1.5rem] pb-10 xl:text-[1.8rem] 2xl:text-[2.1rem]'>
          <span className='font-bold text-gray-600 font-sans'>03</span> space launch 101
        </h4>
      </div>

      <div className="relative left-6 sm:top-[-3rem] sm:left-[5rem] md:left-[8rem] md:top-[-3.5rem] lg:left-[10rem] lg:top-[10rem]
      xl:top-[6rem] 2xl:top-[4.5rem]"
      id="vehicle-infos">
        <div className="w-[28rem] relative sm:top-[-.5rem]" id="info-text">
          {vehicleInfo}
        </div>

        <div className='space-x-[3rem] flex flex-row lg:flex-col lg:space-x-0 lg:space-y-12 xl:space-y-12 2xl:space-y-[4rem]' id="vehicle-select">
          {vehicleSelect}
        </div>
      </div>
    </div>
</>
  )
}
