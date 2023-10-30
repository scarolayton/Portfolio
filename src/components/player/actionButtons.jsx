'use client'
import React, {useEffect} from 'react'
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillBackward } from "react-icons/ai";
import { AiOutlineForward } from "react-icons/ai";
import { useMyContext } from '@/context/songContext';

export default function ActionButtons({size}) {
  
  const {isPlaying,  paused, audioRef, handlePlayClick} = useMyContext()
 useEffect(() => {
  if(audioRef.current && isPlaying){
    audioRef.current.play()
  }
 }, [isPlaying, audioRef])
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
      
       <audio ref={audioRef} id='freeDOM' preload='auto'>
          <source src='freeDOM.mp3'/>
        </audio>
        
      <button onClick={handleBackwardClick} >
          <AiFillBackward className={`inline  hover:text-slate-100 ${size === 'large' ? '' : 'xs:hidden'}`}/>
      </button>
      <button onClick={handlePlayClick} >
        {!paused ? (
          <BsFillPauseFill className="inline hover:text-slate-100"/>
          
        ) : (

          <BsFillPlayFill className="inline hover:text-slate-100"/>
        )} 

      </button>
      <button onClick={handleForwardClick} >

        <AiOutlineForward className="inline hover:text-slate-100"/>
      </button>
    </div>
  )
}
