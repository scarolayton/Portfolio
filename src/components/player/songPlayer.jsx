'use client'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import songPic from '@/static/song-pic.jpg'
import { useMyContext } from '@/context/songContext'
import FullScreenPlayer from './fullScreenPlayer'
import {  BsMusicNoteBeamed, BsArrowsAngleExpand } from 'react-icons/bs'
export default function SongPlayer() {
  const {isPlaying} = useMyContext()
  const [fullScreenPlayerIsOpen, setFullScreenPlayerIsOpen] = useState(false)
  return (
    <>
      {createPortal(
        <FullScreenPlayer setFullScreenPlayerIsOpen={setFullScreenPlayerIsOpen} fullScreenPlayerIsOpen={fullScreenPlayerIsOpen}/>,
        document.body
      )}
     
      {isPlaying ? (
      
      <div className="flex self-center rounded-sm bg-[#4d4d4d] m-1 w-2/5 sm:w-5/6 xs:w-1/2  xs:bg-transparent">
        <div className="relative group rounded-full w-12 h-12">
          <button onClick={() => setFullScreenPlayerIsOpen(true)}   className='md:block h-full'>

            <Image className="xs:rounded-lg  h-full" width={50} height={50} alt="song_pic-picture-from-josh-Sorrensons" src={songPic}/>
          </button>
          <div className="absolute md:hidden  inset-0 flex  items-center justify-center rounded-lg  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button  onClick={() => setFullScreenPlayerIsOpen(!fullScreenPlayerIsOpen)}   className='w-full h-full'>
                <BsArrowsAngleExpand className="text-2xl text-slate-100 m-auto"/>
              </button>
            </div>
        </div>
        <div className="flex justify-center w-full items-center xs:items-start flex-col text-[#b3b3b3] text-sm">
          <h4 className="font-medium xs:text-slate-100 xs:ml-1.5">FreeDOM</h4>
          <p className="xs:hidden">Sergio Caro - FreeDom</p>
        </div>
      </div>
      ) : (
        <div className="flex self-center rounded-sm bg-[#4d4d4d] m-1 w-2/5 sm:w-5/6 xs:w-1/2  xs:bg-transparent">
          <div className="relative group">
            <button  onClick={() => setFullScreenPlayerIsOpen(!fullScreenPlayerIsOpen)}  >
              <div className='bg-[#323232] w-12 h-12 flex justify-center items-center'>
                <BsMusicNoteBeamed className='text-[#494949] text-3xl'/>
              </div>
            </button>
            <div className="absolute md:hidden  inset-0 flex  items-center justify-center rounded-lg  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button  onClick={() => setFullScreenPlayerIsOpen(!fullScreenPlayerIsOpen)}   className='w-full h-full'>
                <BsArrowsAngleExpand className="text-2xl text-slate-100 m-auto"/>
              </button>
            </div>
          </div>
        <div className="flex justify-center w-full items-center xs:items-start flex-col text-[#b3b3b3] text-sm">
          <h2 className="text-center text-[#fa586a] font-semibold text-lg">S</h2>
          <p className="text-center text-sm text-slate-100">Sergio Caro</p>
        </div>
      </div>
  
      )}
    </>
  )
}
