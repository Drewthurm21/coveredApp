import { useRouter } from 'next/router'
const navBtnStyle = 'my-auto hover:scale-125 transition duration-150 ease-in-out'
const navBtnSelected = 'nav-selected text-xl underline'

export default function Navbar() {
  const router = useRouter()
  return (
    <nav className='flex flex-row space-x-10 my-3 fixed top-3 right-5'>
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