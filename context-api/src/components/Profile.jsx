import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)


  if(!user){
    return(
        <div>
            Please Login
        </div>
    )
  }
  return(
    <div> Welcome {user.name} and your email is {user.email} </div>
  )
}

export default Profile