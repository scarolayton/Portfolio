'use client'
import React, { useState } from 'react'
import { AiFillGithub, AiOutlineHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoTailwindCss } from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { BsChevronCompactRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
export default function Technologies() {
  const [IsAPhoneScreen, setIsAPhoneScreen] = useState(typeof window !== 'undefined' && window.innerWidth <= 720)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1590 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1590, min: 1280 },
      items: 2 
    },
    tablet: {
      breakpoint: { max: 1280, min: 720 },
      items: 1
    },
    phone: {
      breakpoint: { max: 720, min: 0 },
      items: 1
    }
  };
  return (
    <div id='Skills' className='group  w-2/3 lg:w-11/12 scroll-my-24'>
     <h3 className="mb-4 ml-6 lg:ml-0 text-lg font-bold" >Top Technologies</h3>
     <Carousel
      autoPlay={IsAPhoneScreen}
      swipeable={true}
      draggable={true}
      customRightArrow={
        <BsChevronRight className='absolute opacity-0 group-hover:opacity-0 transition-opacity duration-300 top-1/3 mt-2 -right-2 lg:-right-6 max-w-4 cursor-pointer text-4xl font-extralight'/>
      }
      customLeftArrow={
        <BsChevronLeft className='absolute opacity-0 group-hover:opacity-50 transition-opacity duration-300 top-1/3 mt-2 -left-2.5 max-w-4 cursor-pointer text-4xl font-extralight'/>
      }
      responsive={responsive}
      
      // ssr={true} // means to render carousel on server-side.
      keyBoardControl={true}
      renderButtonGroupOutside
      transitionDuration={500}
      
      removeArrowOnDeviceType={["phone"]}
      itemClass="carousel-item-padding-40-px"
     >
      <div className="mr-6 ml-6 lg:ml-0">
        <div className='flex border-t py-2 border-[#ffffff1a]'>
          <AiOutlineHtml5 className='inline text-4xl bg-orange-600 rounded-md'/>
          <div className='ml-3'>
            <h4 className='text-sm font-semibold'>HTML</h4>
            <p className='text-xs text-[#b3b3b3]'>Structuring - 2019</p>
          </div>
        </div>
        <div className='flex border-t py-2 border-[#ffffff1a]'>
          <BiLogoCss3 className='inline text-4xl text-blue-500 bg-slate-50 rounded-md'/>
          <div className='ml-3'>
            <h4 className='text-sm font-semibold'>CSS</h4>
            <p className='text-xs text-[#b3b3b3]'>Styling - 2019</p>
          </div>
        </div>
        <div className='flex border-t py-2 border-[#ffffff1a]'>
          <IoLogoJavascript className='inline text-4xl text-gray-950  bg-yellow-300 rounded-md'/>
          <div className='ml-3'>
            <h4 className='text-sm font-semibold'>Javascript</h4>
            <p className='text-xs text-[#b3b3b3]'>DOM, Events, ECMAscript - 2019</p>
          </div>
        </div>
      </div>
      <div className="mr-6 ml-6 lg:ml-0">
        <div className='flex border-t py-2 border-[#ffffff1a]'>
          <FaReact className='inline text-4xl text-[#0c9fcb] bg-slate-50 rounded-md'/>
          <div className='ml-3'>
            <h4 className='text-sm font-semibold'>React JS</h4>
            <p className='text-xs text-[#b3b3b3]'>Components, Hooks, JSX - 2022</p>
          </div>
        </div>
        <div className='flex border-t py-2 border-[#ffffff1a]'>
          <TbBrandNextjs className='inline text-4xl bg-gray-900 rounded-md'/>
          <div className='ml-3'>
            <h4 className='text-sm font-semibold'>Next js</h4>
            <p className='text-xs text-[#b3b3b3]'>Client and server components - 2022</p>
          </div>
        </div>
        <div className='flex border-t py-2 border-[#ffffff1a]'>
          <RiSupabaseFill className='inline text-4xl text-green-500 bg-gray-800 rounded-md'/>
          <div className='ml-3'>
            <h4 className='text-sm font-semibold'>Supabase</h4>
            <p className='text-xs text-[#b3b3b3]'>SQL, Auth - 2019</p>
          </div>
        </div>
      </div>
      <div className="mr-6 ml-6 lg:ml-0 ">
        <div className='flex border-t py-2 border-[#ffffff1a]'>
          <BiLogoTailwindCss className='inline text-4xl text-blue-400 bg-slate-50 rounded-md'/>
          <div className='ml-3'>
            <h4 className='text-sm font-semibold'>Tailwind CSS</h4>
            <p className='text-xs text-[#b3b3b3]'>styling - 2022</p>
          </div>
        </div>
        <div className='flex border-t py-2 border-[#ffffff1a]'>
          <TbBrandTypescript className='inline text-4xl bg-blue-400 rounded-md'/>
          <div className='ml-3'>
            <h4 className='text-sm font-semibold'>Typescript</h4>
            <p className='text-xs text-[#b3b3b3]'>Maintainability - 2023</p>
          </div>
        </div>
        <div className='flex border-t py-2 border-[#ffffff1a]'>
          <AiFillGithub className='inline text-4xl bg-gray-900 rounded-md'/>
          <div className='ml-3'>
            <h4 className='text-sm font-semibold'>GitHub</h4>
            <p className='text-xs text-[#b3b3b3]'>Scrum, commits, pr - 2019</p>
          </div>
        </div>
      </div>
     </Carousel>
    </div>
  )
}
