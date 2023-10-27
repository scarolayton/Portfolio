import { AiFillBackward, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ActionButtons from "./actionButtons";
import SongPlayer from "./songPlayer";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";
import VolumeController from "./volumeController";
const PlayerContainer = ()  => {
  
  
  return (
    <div className="fixed w-screen z-40  xs:bottom-1.5  xs:flex xs:justify-center">
      
      <article className="ml-64 md:ml-44 xs:ml-0  xs:w-11/12 xs:rounded-xl flex justify-evenly xs:flex-row-reverse xs:justify-between items-center xs:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  bg-[#2d2d2d]  ">
        <ActionButtons/>
        <SongPlayer/>
        <VolumeController/>
          <div className="text-[#b3b3b3] text-lg sm:hidden xs:hidden justify-self-end">
            <Link href={'https://www.linkedin.com/in/sergio-eduardo-caro-layton/'}>

              <AiFillLinkedin className="inline mr-3"/>
            </Link>
            <Link href={'https://github.com/scarolayton'}>
              <AiFillGithub className="inline mr-3"/>
            </Link>
            <Link href={'/CV-english.pdf'}>
              <FaFilePdf className="inline"/>
            </Link>
          </div>
      </article>
    </div>
  )
}

export default PlayerContainer