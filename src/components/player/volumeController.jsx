'use client'
import React, {useState} from 'react'
import { BsVolumeUpFill, BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { useMyContext } from '@/context/songContext';
export default function VolumeController({size}) {
  const {volume, setVolume} = useMyContext()
  const song = typeof document !== 'undefined' ? document.getElementById('freeDOM') : null;
  const changeVolume = (e) => {
    song.volume = e.target.value
    setVolume(e.target.value)
  }
  const setVolumeTo0 = () => {
    song.volume = 0
    setVolume(0)
  }
   return (
    <div className={` text-sm md:hidden  ${size === 'large' ? 'lg:w-full lg:text-base' : ''}`}>
      {volume > 0 ? (
        <>
          {volume >= 0.5 ? (
            <BsVolumeUpFill onClick={() => setVolumeTo0()} className={`inline cursor-pointer mt-1.5 text-[#b3b3b3] ${size === 'large' ? 'lg:mt-0.5' : ''}`} />
          ) : (
            <BsFillVolumeDownFill onClick={() => setVolumeTo0(0)} className={`inline cursor-pointer mt-1.5 text-[#b3b3b3] ${size === 'large' ? 'lg:mt-0.5' : ''}`} />
          )}
          <input
            step={0.10}
            min="0"
            max="1"
            type="range"
            value={volume}
            onChange={(e) => changeVolume(e)}
            className={`ml-auto  rounded-full  cursor-pointer ${size === 'large' ? 'w-11/12 h-1 lg:h-1.5' : 'w-20 h-0.5'}`}
          />
        </>
      ) : (
        <>

          <BsFillVolumeMuteFill className={`inline cursor-pointer mt-1.5 text-[#b3b3b3] ${size === 'large' ? 'lg:mt-0.5' : ''}`} />
          <input
              step={0.10}
              min="0"
              max="1"
              type="range"
              value={volume}
              onChange={(e) => changeVolume(e)}
              className={` ml-auto  rounded-full cursor-pointer ${size === 'large' ? 'w-11/12 h-1 lg:h-1.5' : 'w-20 h-0.5'}`}
            />
        </>
      )}
    </div>
  )
}
