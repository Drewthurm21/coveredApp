import '@/styles/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navBtnStyle = 'my-auto hover:scale-125 transition duration-150 ease-in-out'

export default function App({ Component, pageProps }) {

  const router = useRouter()
  let activeUser = false

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
        <div>
          <nav className='flex flex-row space-x-10 my-3 fixed top-3 right-3 fill'>
            <Link className={`${navBtnStyle} ${router.pathname === '/' ? 'nav-selected text-lg' : ''}`} href='/'>home</Link>
            <Link className={`${navBtnStyle} ${router.pathname === '/login' ? 'nav-selected text-lg' : ''}`} href='/login'>login</Link>
            <Link className={`${navBtnStyle} ${router.pathname === '/signup' ? 'nav-selected text-lg' : ''}`} href='/signup'>sign up</Link>
            {activeUser && <Link className={`${navBtnStyle} ${router.pathname === '/signout' ? 'nav-selected text-lg' : ''}`} href='/signout'>sign out</Link>}
          </nav>
        </div>
      </div>
      <div className='container my-40 mx-auto'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
