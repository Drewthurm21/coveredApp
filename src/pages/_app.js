import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

export default function App({ Component, pageProps }) {
  const [colorTheme, setColorTheme] = useState('light')

  useEffect(() => {
    if (colorTheme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')

  }, [colorTheme])

  return (
    <div className='container'>
      <div className='flex flex-row relative '>
        <div className='flex flex-col'>
          <div className='flex flex-row absolute top-0 left-10'>
            <span className='text-xs'>we</span>
            <span className='text-xs'>got</span>
            <span className='text-xs'>you</span>
          </div>
          <div className='text-4xl flex flex-col'>Covered</div>
        </div>
        <Navbar />
      </div>
      <div className='container mt-40 mx-auto'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
