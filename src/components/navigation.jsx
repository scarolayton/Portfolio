import { GrProjects } from "react-icons/gr";
import { BsNut } from "react-icons/bs";
import { GiCharacter } from "react-icons/gi";
import { SiStarship } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";
import { AiOutlineBulb } from "react-icons/ai";
import Link from "next/link";
import {  AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";
const Navigation = () => {
  return(
    <article className="h-screen w-64 md:w-44 xs:hidden navigation z-40   flex flex-col justify-between p-6 border-r border-[#ffffff1a] text-sm bg-[#252526] font-medium text-zinc-50 fixed">
      <nav className="xs:h-3/4">
        <h2 className="text-center text-[#fa586a] font-semibold text-8xl">S</h2>
        <p className="text-center text-xl ">Sergio Caro</p>
        <ul className="mt-7  ">
          <li className="mb-4   ">
            <AiOutlineBulb className="inline text-lg mr-2 text-[#fa586a]"/>
            <Link href={'#Proyects'}>Proyects</Link>
            
          </li>
          <li className="mb-4 ">
            <BsNut className="inline mr-2 text-lg text-[#fa586a]"/>
            <Link href={'#Skills'}>Skills</Link>
            
          </li>
          <li className="mb-4  "> 
            <GiCharacter className="inline mr-2 text-lg text-[#fa586a]"/>
            <Link href={'#About'}>About Me</Link>
          </li>
          <li className="mb-4  ">
            <BiSolidContact className="inline mr-2 text-lg text-[#fa586a]"/>
            <Link href={'#About'}>Contact</Link>
            </li>
        </ul>
      </nav>
      <div className="text-[#b3b3b3] text-lg hidden sm:block self-center sm:text-2xl">
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

  )
}

export default Navigation