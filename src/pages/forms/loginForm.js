import { useState, useEffect } from 'react'
import * as utils from '../../utilities'

export default function LoginForm(props) {

  const [userName, setUserName] = useState('')
  const [userSelected, setUserSelected] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {

  }, [userName, password, userSelected])

  const checkUser = (e) => {
    e.preventDefault()
    const userInfo = {
      userName,
      password: password
    }

    let user = utils.userList.find(user => (
      user.userName === userName && user.password === password
    ))

    if (user) setUserSelected(true)
  };


  return (
    <div className="container w-1/2 px-10 py-10 border-solid form-border text-center">
      <h1>Form Header</h1>
      {userSelected ? <div>Logged in</div> : <div>Not Logged in</div>}
      <form className='px-5 py-5 flex flex-col' onSubmit={checkUser}>
        <label className='px-5 py-3'
          htmlFor='userName'
        > .userName :
          <input
            className='px-5' id='userName' type='text' value={userName} placeholder="input" onChange={e => setUserName(e.target.value)}></input>
        </label>
        <label className='px-5 py-3'
          htmlFor='password'
        > .password :
          <input
            className='px-5' id='password' type='text' value={password} placeholder="input" onChange={e => setPassword(e.target.value)}></input>
        </label>
        <button>CLICK</button>
      </form>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      users: utils.userList
    }
  }
}