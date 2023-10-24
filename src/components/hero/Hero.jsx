import React from 'react';
import bgS from '../../assets/home/background-home-mobile.jpg';
import bgM from '../../assets/home/background-home-tablet.jpg';
import bgL from '../../assets/home/background-home-desktop.jpg';

export const Hero = () => {
  return (
    <div id="container">
        <img src={bgS} alt="bgS" className='w-full absolute top-0 z-[-1] h-full object-cover md:hidden'/>
        <img src={bgM} alt="bgM" className='w-full absolute top-0 z-[-1] h-full object-cover hidden md:block lg:hidden'/>
        <img src={bgL} alt="bgL" className='w-full absolute top-0 z-[-1] h-full object-cover hidden lg:block' />

        <div className='relative top-[1rem] lg:flex lg:flex-row lg:left-[-4rem] xl:left-[-10rem] xl:top-[-10rem]
        2xl:top-[-13rem] 2xl:left-[-12rem]' 
        id="content-table">
          <div className="text-center space-y-[1rem] md:space-y-[-1rem] text-[#c4c4c4] p-5 md:p-[1rem] md:px-[9rem]
          lg:p-[11rem] lg:text-start xl:p-[19rem] 2xl:p-[24rem] 2xl:w-[76rem] 2xl:space-y-[1rem]"
          id="text-wrapper">
            
            <h1 className='text-[1.3rem] tracking-tight font-light 2xl:text-[1.5rem] 2xl:tracking-normal 2xl:font-normal'>SO, YOU WANT TO TRAVEL TO</h1>

            <h1 className='text-[7rem] font-light text-white tracking-wide pb-7 md:pb-[3rem] md:text-[8rem] 2xl:pb-[2rem]
            2xl:text-[10rem]'>
              SPACE
            </h1>

            <p className='text-[1.3rem] text-[#adadad] leading-[2.1rem] md:text-[1.1rem] md:leading-[2.2rem]'>
              Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover
              kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </p>
          </div>

          <div 
          className="tracking-widest rounded-full w-[12.5rem] h-[12.5rem] flex justify-center bg-white
          text-[1.6rem] hover:shadow-lg hover:shadow-yellow-500 duration-300 m-auto pt-[5.5rem] mt-[5rem]
          hover:font-bold hover:text-yellow-400 lg:px-[6.5rem] lg:pt-[5.5rem] lg:text-[1.9rem] xl:px-[9.2rem]
          lg:mt-[15rem] xl:mt-[23rem] 2xl:text-[2.5rem] 2xl:mt-[30rem] xl:py-[8rem] xl:pb-[10rem] 2xl:py-[7rem]
          2xl:pb-[10rem] 2xl:px-[8.5rem]"
          id="explore">
            EXPLORE
          </div>
        </div>
    </div>
  )
}
