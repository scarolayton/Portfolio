'use client'
import React from 'react'
import { useMyContext } from '@/context/songContext'
import { useEffect, useState, useRef } from 'react'
export default function AudioBar({size}) {
  const {audioRef, isPlaying} = useMyContext()
  const [percentageProgress, setPercentageProgress] = useState(0)
  const [progressInMinutes, setProgressInMinutes] = useState('00:00')
  const [reaminingTime, setReaminingTime] = useState('00:00')
  const barRef = useRef(null)
  const audio = document.getElementById('freeDOM')
  const convertSecondsToMinutes = (seconds) => {
    const currentTimeMinutes = Math.floor(seconds/60) === 0 ? '00' : `0${Math.floor(seconds/60)}`
    const currentTimeSeconds = Math.floor(seconds%60) <= 9 ? `0${Math.floor(seconds%60)}` : `${Math.floor(seconds%60)}`
    const timeConfigured = `${currentTimeMinutes}:${currentTimeSeconds}`
    return(timeConfigured)
  }
  useEffect(() => {
    if(isPlaying){

      audio.addEventListener('timeupdate', () => {
        const ct = audio.currentTime
        const duration = audio.duration
        setPercentageProgress((ct/duration) * 100)
        const reaminingTimeSeconds = duration - ct
        
        
        setProgressInMinutes(convertSecondsToMinutes(ct))
        setReaminingTime(convertSecondsToMinutes(reaminingTimeSeconds))
      })
    }
    
  }, [audio, isPlaying])
  const changeTheCurrentTime = (e) => {
    const offSet = e.nativeEvent.offsetX
    const parentWidth = barRef.current.parentNode.clientWidth
    
    const percentageWidth = offSet / parentWidth 
    audio.currentTime = percentageWidth  * audio.duration  
  }
  return (
    <div className={`${size === 'small' ? 'w-full xs:hidden' : 'lg:w-11/12'}`}>

      <div onClick={changeTheCurrentTime} className={`w-full cursor-pointer bg-[#b3b3b3] h-1  ${size === 'small' ? 'mt-0' : 'mt-5 lg:h-1.5 rounded-xl '}`}>
        <div ref={barRef} style={{width: `${percentageProgress}%`}} className={`bg-slate-100 h-1   ${size === 'small' ? '' : 'lg:h-1.5 rounded-xl'}`}></div>
      </div>
      <div className={`flex justify-between text-xs text-[#b3b3b3] font-bold ${size === 'small' && 'hidden'}`}>
        <p>{progressInMinutes}</p>
        <p>-{reaminingTime}</p>
      </div>
    </div>
  )
}
