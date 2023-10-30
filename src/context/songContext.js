'use client'
import React, { createContext, useContext, useState, useRef } from 'react';

// Crea el contexto
const MyContext = createContext();

export function IsPlayingContextProvider ({children}) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isScreenView, setIsScreenView] = useState(false)
  const [paused, setPaused] = useState(true)

  const playPauseTheSong = () => {
    if (!paused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play(); // Si estaba pausado, reanuda la reproducción
    }
  }
  const handlePlayClick = () => {
    if (isPlaying) {
      setPaused(!paused); // Cambia el estado de pausa
      playPauseTheSong()
      // Si se estaba reproduciendo, pausa el audio
     
    } else {
      audioRef.current.play().finally(
        function(){
          setIsPlaying(true)
          setPaused(false)
        }
      )
      audioRef.current.play()
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
    // playPauseTheSong, 
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