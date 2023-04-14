import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import Toggle from 'react-toggle'

const navBtnStyle = 'my-auto hover:scale-125 transition duration-150 ease-in-out'
const navBtnSelected = 'nav-selected text-xl underline'

export default function Navbar() {

  const [siteTheme, setSiteTheme] = useState('light')

  const themeToggler = () => {
    if (siteTheme === 'light') setSiteTheme('dark')
    else setSiteTheme('light')
  }

  useEffect(() => {

  }, [siteTheme])



  const router = useRouter()
  return (
    <nav className='flex flex-row space-x-10 my-3 fixed top-3 right-5 align-middle'>
      <div className='flex flex-row mr-3'>
        <FontAwesomeIcon icon={faSun} />
        <div className='toggler flex flex-col relative'>
          <span className='lights-label absolute my-0 mx-0 text-xs text-center'>{siteTheme === 'light' ? 'lights off' : 'lights on'}</span>
          <Toggle
            className='toggle-switch'
            defaultChecked={false}
            icons={false}
            onChange={themeToggler}
          />
        </div>
        <FontAwesomeIcon icon={faMoon} />
      </div>
      {[
        ['home', '/'],
        ['login', '/login'],
        ['sign up', '/signup'],
        ['sign out', '/signout'],
      ].map(([title, url]) => (
        <a href={url} className={`${navBtnStyle} ${router.pathname === url ? navBtnSelected : ''}`}>{title}</a>
      ))}
    </nav>
  )
}