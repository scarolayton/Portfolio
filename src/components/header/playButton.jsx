'use client'
import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { useMyContext } from '@/context/songContext'
export default function PlayButton() {
  const {handlePlayClick} = useMyContext()
    return (
    <button onClick={handlePlayClick} className="bg-[#fa586a] rounded-full p-1  mt-1">
    <BsFillPlayFill className="inline hover:text-slate-100  text-3xl"/>
    </button>
  )
}
