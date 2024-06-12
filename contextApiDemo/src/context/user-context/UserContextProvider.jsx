import React, { useState } from 'react';
import { UserContext } from './UserContext';


const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [no, setNo] = useState()
   
   return (
    <UserContext.Provider value={{user, setUser, no, setNo}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
