'use client'
import React, {useEffect} from 'react'
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillBackward } from "react-icons/ai";
import { AiOutlineForward } from "react-icons/ai";
import { useMyContext } from '@/context/songContext';
// import freeDOM from '@/static/freeDOM.mp3'
export default function ActionButtons({size}) {
  
  const {isPlaying,  paused,  handlePlayClick, audioRef} = useMyContext()
  
  const handleBackwardClick = () => {
    if(isPlaying){

      audioRef.current.currentTime -= 10 
    }
  }
  
  
 
  const handleForwardClick = () => {
    if(isPlaying){

      audioRef.current.currentTime += 10 
    }
  }
  return (
    <div className={`  text-[#b3b3b3] xs:mr-2 xs:text-slate-100 ${size === 'large' ? 'text-5xl lg:text-7xl' : 'text-3xl sm:hidden xs:block'} `}>
      <audio  ref={audioRef} id='freeDOM' preload='metadata'>
        <source src='/freeDOM.mp3' type='audio/mpeg'/>
      </audio>
      <button onClick={handleBackwardClick} disabled={!isPlaying}>
          <AiFillBackward className={`inline  hover:text-slate-100 ${size === 'large' ? '' : 'xs:hidden'}`}/>
      </button>
      <button onClick={handlePlayClick} disabled={!isPlaying}>
        {!paused ? (
          <BsFillPauseFill className="inline hover:text-slate-100"/>
          
        ) : (

          <BsFillPlayFill className="inline hover:text-slate-100"/>
        )} 

      </button>
      <button onClick={handleForwardClick} disabled={!isPlaying}>

        <AiOutlineForward className="inline hover:text-slate-100"/>
      </button>
    </div>
  )
}
