import React, {useState, useEffect} from 'react'
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import { BsFillPlayFill } from 'react-icons/bs'
import Link from 'next/link'
export default function ProyectBigCard({proyect, setIsTheFullCardOpen, isTheFullCardOpen}) {
  const [screenWidth, setScreenWidth] = useState()
  useEffect(() => {
    if(isTheFullCardOpen){
      document.body.style.overflow = 'hidden'
      
    }
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape'){
        setIsTheFullCardOpen(false)
        document.body.style.overflow = 'auto'
      }
    })
    setScreenWidth(window.innerWidth)
  }, [isTheFullCardOpen, setIsTheFullCardOpen])
  const handleOnClick = () => {
    setIsTheFullCardOpen(false)
    
    document.body.style.overflow = 'auto'
    
  }
  return (
    <div  onClick={handleOnClick} className='fixed top-0  left-0 bg-black bg-opacity-50  h-screen w-screen flex justify-center items-center z-40'>
      <div className='bg-[#1f1f1f] rounded-lg text-slate-100  p-6  w-150 sm:w-full sm:h-full sm:my-2'>
        <button id='btn-close-proyect' className='text-2xl ' onClick={handleOnClick}>
          <AiOutlineClose />
        </button>
        <Image src={proyect.cover}  className='w-52 h-52 rounded-lg m-auto' width={180} height={180} alt='proyect-cover'/>
        <div className='my-6 flex justify-between items-center'>
          <div className=''>

            <h3 className='text-xl font-bold '>{proyect.name}</h3>
            <p className='text-sm  text-[#b3b3b3] font-semibold'>Sergio Caro - 2019</p>
          </div>
          <div className='flex space-x-4'>
            <Link href={proyect.link}>

              <BsFillPlayFill className="text-2xl block"/>
            </Link>
            <Link href={proyect.github}>
              <AiFillGithub className='text-2xl block'/>
            </Link>
          </div>
        </div>
        <p className=''>{proyect.description}</p>
      </div>
    </div>
  )
}
