import Image from "next/image"
import lastProyectPic from '@/static/icfes-test.png'
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";
const LastProyect = () => {
  return (
    <div className="w-fit mr-0 lg:mb-7 ">
      <h3 className="mb-4 text-lg font-bold">Last Proyect</h3>
      <div className="flex  items-center">
        <div className="relative group rounded-full">
          <Link href={'https://icfes-app-sigma.vercel.app/'} className="md:block" >

            <Image src={lastProyectPic} className="rounded-lg w-40 h-40 " alt="last-proyect-pic" width={180} height={180}/>
          </Link>
          <div className="absolute md:hidden inset-0 flex items-end p-3 rounded-lg bg-gray-700 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={'https://icfes-app-sigma.vercel.app/'} className="bg-gray-600 bg-opacity-80 p-1 rounded-full">
            <BsFillPlayFill className="text-2xl"/>
            </Link>
          </div>
        </div>
        <div className="ml-5 ">
          <p className="text-[#b3b3b3] text-xs font-bold">17 sept 2023</p>
          <h4 className="font-semibold text-base">Test App - Single</h4>
          <p className="text-[#b3b3b3]">1 proyect</p>
        </div>
      </div>

    </div>
  )
}

export default LastProyect