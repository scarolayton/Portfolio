import Image from "next/image"
import PlayButton from "./playButton"
import avatarImg from '@/static/memoji-avatar.png'
const Container = () => {
  return (
    <header className="pt-12 bg-[#232323] ">
      <div className="h-72 w-full flex justify-center items-center">
        <Image width={200} height={200} alt="avatar" className="m-auto rounded-full shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]" src={avatarImg}/>
      </div>
      <div className="p-10 sm:pl-5 pb-6 flex  items-center">
        <PlayButton/>
        <h1 className=" w-0 text-4xl font-bold ml-4 title border-r border-r-solid border-slate-50">Sergio Caro</h1>
      </div>
    </header>
  )
}

export default Container