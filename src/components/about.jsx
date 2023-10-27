import React from 'react'
import Link from "next/link";
import {  AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";
export default function About() {
  return (
    <footer id='About' className='px-10 sm:px-5 pb-6  xs:pb-16 bg-[#2b2b2b] '>
      <div className='flex justify-between md:flex-col'>
        <div className='w-2/3 md:w-full '>
          <h3 className="py-8  text-lg font-bold">About Sergio Caro</h3>
          <p className='text-[#b3b3b3] text-sm'>
              I am a passionate self-taught web developer with three years of experience 
              in constant learning and evolution in the programming world. Throughout my career,
              I have acquired a solid foundation of knowledge and technical skills, backed by a 
              strong motivation to face new challenges and keep abreast of the latest trends and
              technologies in web development.
              <br />
              During my time as a self-taught web developer, I have worked hard to master a variety 
              of programming languages such as HTML, CSS and javascript with react, Typescript, node,
              essential tools for web development such as git, github, visual studio code,
                the terminal, webpack, supabase, tailwind, scrapping among many others.
              <br />
              I love technology and I love every day to learn new technologies and understand
              how they work, right now I am looking for a new work challenge where
                I can develop both my soft skills and my technical skills and enrich
                my work life, I have had the experience of being in work simulations 
                where I have met with great professionals who have taught me many things,
                  if you are interested in contacting me here you can find my linkedin and
                my email address.
          </p>
        </div>
        <div className='w-1/3 pl-24 leading-0 pt-24 md:pl-0 md:w-full md:flex md:justify-between'>
          <div>

            <h5 className='text-sm text-[#b3b3b3]'>Home Town</h5>
            <p>Bogota</p>
          </div>
          <div>

            <h5 className='text-sm text-[#b3b3b3]'>Birthday</h5>
            <p>December 6 2003</p>
          </div>
        </div>
      </div>
      <div className="text-[#b3b3b3] text-center my-4 self-center text-2xl">
            <Link href={'https://www.linkedin.com/in/sergio-eduardo-caro-layton/'}>

              <AiFillLinkedin className="inline mr-3"/>
            </Link>
            <Link href={'https://github.com/scarolayton'}>
              <AiFillGithub className="inline mr-3"/>
            </Link>
            <Link href={'/CV-english.pdf'}>
              <FaFilePdf className="inline"/>
            </Link>
      </div>

    </footer>
  )
}
