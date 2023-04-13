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
    <div className="container mx-auto my-auto">
      <h1>Form Header</h1>
      {userSelected ? <div>Logged in</div> : <div>Not Logged in</div>}
      <form onSubmit={checkUser}>
        <label
          htmlFor='userName'
        > label:
          <input id='userName' type='text' value={userName} placeholder="input" onChange={e => setUserName(e.target.value)}></input>
        </label>
        <label
          htmlFor='password'
        > label:
          <input id='password' type='text' value={password} placeholder="input" onChange={e => setPassword(e.target.value)}></input>
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