import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from './components/Login'
import  Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
};

export default App;
