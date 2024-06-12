import React, { useContext } from 'react';
import { UserContext } from '../context/user-context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext);

    if (!user) return <div>no user</div>
  return  <div> welcome {user.username}</div>
}

export default Profile
