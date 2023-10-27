'use client'
import React, { createContext, useContext, useState, useRef } from 'react';

// Crea el contexto
const MyContext = createContext();

export function IsPlayingContextProvider ({children}) {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isScreenView, setIsScreenView] = useState(false)
  const [paused, setPaused] = useState(true)
  const audio = typeof document !== 'undefined' ? document.getElementById('freeDOM') : null;
  const playPauseTheSong = () => {
    if(paused){

      // audioRef.current.play()
      audio.play()
      }else {
 
      // audioRef.current.pause()
      audio.pause()
    }
  }
  const handlePlayClick = () => {
    if(isPlaying){
      setPaused(!paused)
      playPauseTheSong()
    }else {
      // audioRef.current.play()
      try {
        audioRef.current.play();
        console.log('hola');
      } catch (error) {
        console.error('Error al reproducir el audio:', error);
      }
      audioRef.current.volume = volume
      setIsPlaying(true)
      setPaused(false)
    }
  }
  const valueContext  = {
    isPlaying, 
    setIsPlaying, 
    volume, 
    setVolume, 
    isScreenView, 
    setIsScreenView, 
    paused, 
    setPaused, 
    handlePlayClick, 
    playPauseTheSong, 
    audioRef
  }
  return(
    <MyContext.Provider value={valueContext}>
      {children}
    </MyContext.Provider>
  )
}

export function useMyContext() {
  return useContext(MyContext);
}