import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user-context/UserContext'


const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username, password})
    }

    const {setUser} = useContext(UserContext)


  return (
    <div>
    <h3>Login</h3>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
      <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
