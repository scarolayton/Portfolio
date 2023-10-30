import './globals.css'
// import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
import { IsPlayingContextProvider } from '@/context/songContext'
// const inter = Inter({ subsets: ['latin'] })
import PlayerContainer from '@/components/player/container'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <IsPlayingContextProvider>
          <Navigation/>
          <PlayerContainer/>
          {children}
        </IsPlayingContextProvider>
     </body>
    </html>
  )
}
