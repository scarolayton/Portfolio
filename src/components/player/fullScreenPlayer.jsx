import React from 'react'
import Image from 'next/image'
import songPic from '@/static/song-pic.jpg'
import AudioBar from './audioBar'
import ActionButtons from './actionButtons'
import VolumeController from './volumeController'
import { useMyContext} from '@/context/songContext'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import ButtonCloseFullPlayer from './buttonCloseFullPlayer'
export default function FullScreenPlayer({setFullScreenPlayerIsOpen, fullScreenPlayerIsOpen}) {
  const {isPlaying} = useMyContext()
  return (
      <section className={`fixed left-0 top-0 transition-transform duration-150 text-slate-100 flex flex-col items-center justify-center  z-50  background-animate bg-gradient-to-r
      from-[#1a1f1e]
      via-[#323232]
      to-[#b3b3b3]  w-screen h-screen 
        ${fullScreenPlayerIsOpen ? 'block lg:translate-y-0' : 'lg:translate-y-full hidden lg:block'}
    `}>
        <ButtonCloseFullPlayer setFullScreenPlayerIsOpen={setFullScreenPlayerIsOpen} fullScreenPlayerIsOpen={fullScreenPlayerIsOpen}/>
        {isPlaying ? (
          <>

            <div className='h-full w-1/3 lg:w-full text-center flex flex-col justify-center lg:items-center lg:justify-between lg:py-10'>
                <div className='lg:flex lg:flex-col lg:items-center'>

                  <Image className='rounded-xl mb-6 mt-12 w-fit lg:w-120 xs:w-11/12'   src={songPic} alt='songPic'/>
                  <h3 className='text-2xl font-semibold'>FreeDom</h3>
                  <p className='text-[#b3b3b3] font-bold'>Sergio Caro</p>
                </div>
                <AudioBar/>
                <ActionButtons size='large'/>
                <VolumeController size='large'/>
            </div>
          </>
        ) : (
          <div className='h-full w-1/3 lg:w-full  text-center flex flex-col justify-center lg:items-center lg:justify-between lg:py-10'>
            <div className='rounded-xl my-10 bg-[#323232] flex justify-center items-center w-full lg:w-120 xs:w-11/12 aspect-square'>
              <BsMusicNoteBeamed className='text-[#494949] text-13xl xl:text-9xl'/>
            </div>
            
            <AudioBar/>
            <ActionButtons size='large'/>
            <VolumeController size='large'/>
          </div>
        )} 
      </section>

  )
}
