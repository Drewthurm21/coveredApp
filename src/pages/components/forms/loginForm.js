import { useState, useEffect } from 'react'
import * as utils from '../../../utilities'

export default function LoginForm(props) {

  const [userName, setUserName] = useState('')
  const [userSelected, setUserSelected] = useState(false)
  const [password, setPassword] = useState('')
  const [loginErrors, setLoginErrors] = useState([])

  useEffect(() => {
  }, [userName, password, userSelected, loginErrors])

  const checkUser = () => {
    const userInfo = {
      userName,
      password: password
    }

    let user = utils.userList.find(user => (
      user.userName === userName && user.password === password
    ))

    if (user) setUserSelected(userInfo)
    else setLoginErrors(['user not found'])
  };


  return (
    <div className="container flex flex-col justify-between w-1/2 px-10 py-10 relative custom-border-shadow text-center">
      {userSelected ? <div>Logged in as {userSelected.userName}</div> : loginErrors.length > 0 ? <label>{loginErrors}</label> : <div>Please Log in</div>}
      <form className='px-5 py-5 flex flex-col' >
        <label className='py-3 form-label-input'
          htmlFor='userName'
        >
          <input
            className='mx-5' id='userName' type='text' autocomplete="off" value={userName} placeholder="user.userName" onChange={e => setUserName(e.target.value)}></input>
        </label>
        <label className='py-3 form-label-input'
          htmlFor='password'
        >
          <input
            className='mx-5' id='password' type='password' autocomplete="off" value={password} placeholder="user.password" onChange={e => setPassword(e.target.value)}></input>
        </label>
      </form>
      <div onClick={checkUser} className='div-btn self-center custom-border-shadow'>login</div>
    </div >
  )
}


export async function getStaticProps() {
  return {
    props: {
      users: utils.userList
    }
  }
}