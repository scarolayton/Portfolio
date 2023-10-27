'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {  BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import proyects from './proyectsData';
import ProyectCard from './proyectCard';

export default function Proyects() {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1590 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1590, min: 1040 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1040, min: 1000 },
      items: 3
    },
    phone: {
      breakpoint: { max: 1000, min: 720 },
      items: 2.3
    },
    smallPhone: {
      breakpoint: { max: 640, min: 0 },
      items: 1.5
    }
  }
  return (
    <div id='Proyects' className='pl-10 pr-3 group/container mb-10 sm:pl-5 scroll-my-32'>
      <h3 className="mb-4  text-lg font-bold" >Proyects</h3>
      <Carousel
        infinite={true} 
        autoPlay={true}
      swipeable={true}
      draggable={true}
      customRightArrow={
        <BsChevronRight className='absolute opacity-0 group-hover/container:opacity-50 transition-opacity duration-300 top-1/3 mt-2 -right-2.5  max-w-4 cursor-pointer text-4xl font-extralight'/>
      }
      customLeftArrow={
        <BsChevronLeft className='absolute opacity-0 group-hover/container:opacity-50 transition-opacity duration-300 top-1/3 mt-2 -left-2.5 max-w-4 cursor-pointer text-4xl font-extralight'/>
      }
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      keyBoardControl={true}
      renderButtonGroupOutside
      transitionDuration={500}
      removeArrowOnDeviceType={["phone", "tablet", "smallPhone"]}
      itemClass="carousel-item-padding-60-px"
     >        
       {proyects.map((proyect, index) => (
        <ProyectCard key={index} proyect={proyect}/>
       ))}

      </Carousel>
    </div>
  )
}
