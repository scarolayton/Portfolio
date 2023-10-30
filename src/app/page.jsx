import Image from 'next/image'
import Container from '@/components/header/container'
import LastProyect from '@/components/last-proyect'
import Technologies from '@/components/technologies'
import Proyects from '@/components/proyects/proyectsContainer'
import About from '@/components/about'
import { useMyContext } from '@/context/songContext'
export default function Home() {

  return (
    <section className='ml-64 md:ml-44 xs:ml-0 main text-zinc-50'>
       
      <Container/>
      <div className='py-10 pl-10 pr-4   flex justify-between lg:flex-col sm:pl-5 '>
        <LastProyect/>
        <Technologies/>
      </div>
      <Proyects/>
      <About/>
    </section>
  )
}
