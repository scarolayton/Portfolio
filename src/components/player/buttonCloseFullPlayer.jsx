import React, {useEffect, useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsChevronCompactDown } from 'react-icons/bs'

export default function ButtonCloseFullPlayer({setFullScreenPlayerIsOpen, fullScreenPlayerIsOpen}) {
  const [screenWidth, setScreenWidth] = useState()
  useEffect(() => {
    if(fullScreenPlayerIsOpen){
      document.body.style.overflow = 'hidden'
      
    }
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape'){
        setFullScreenPlayerIsOpen(false)
        document.body.style.overflow = 'auto'
      }
    })
    setScreenWidth(window.innerWidth)
  }, [fullScreenPlayerIsOpen, setFullScreenPlayerIsOpen])
  const handleOnClick = () => {
    setFullScreenPlayerIsOpen(false)
    
    document.body.style.overflow = 'auto'
    
  }
  return (
    <>
      {screenWidth >= 1024 ? (
        <button onClick={() => handleOnClick()} className='absolute left-0 top-0 text-3xl ml-4 mt-3 text-[#b3b3b3]'>
          <AiOutlineClose/>
        </button>

      ): (
        <button id='btn-so' onClick={() => handleOnClick()} className='absolute left-1/2 top-0 text-3xl  mt-3 text-[#b3b3b3]'>
          <BsChevronCompactDown/>
        </button>
      )}
    </>
  )
}
