'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { BsFillPlayFill } from 'react-icons/bs'
import ProyectBigCard from './proyectBigCard'
import { createPortal } from 'react-dom'
export default function ProyectCard({proyect}) {
  const [isTheFullCardOpen, setIsTheFullCardOpen] = useState(false)
  return (
    <div className='pr-2'>
      {isTheFullCardOpen && 
        createPortal(<ProyectBigCard proyect={proyect} setIsTheFullCardOpen={setIsTheFullCardOpen} isTheFullCardOpen={isTheFullCardOpen}/>, document.querySelector('.main'))
      } 
    <div className="relative  group/item rounded-full">
      <Link className=' md:block w-52' href={proyect.link}>

        <Image src={proyect.cover} className="rounded-lg w-52 h-52 " alt="last-proyect-pic" width={180} height={180}/>
      </Link>
      <div className="absolute md:hidden inset-0 flex items-end w-52  p-3 rounded-lg bg-gray-700 bg-opacity-30 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
        <Link href={proyect.link} className="bg-gray-600 bg-opacity-80 p-1 rounded-full">
        <BsFillPlayFill className="text-2xl"/>
        </Link>
      </div>
    </div>
    <p>
      {proyect.name}
    </p>
    <p className='text-sm text-[#b3b3b3] w-52 leading-tight'>
      {proyect.description.slice(0,45)}
      <button onClick={() => setIsTheFullCardOpen(true)} className='inline text-slate-300'> <strong>More...</strong> </button>
    {/* it has different categories, you can create an account and see the top 10 users with more points in the app and every time you take a test you will receive random questions. with categories such as science, mathematics, English and others. I developed this application at first with React and then I migrated it to Next 13 styling it with tailwind css, the questions are stored in a database with supabase along with the users, the authentication can be done anonymously or with google */}
    </p>
  </div>
  )
}
