import React from 'react'

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div><h1 className="text-3xl font-bold underline">
    Hello world!
  </h1></div>
  
  )
}

export default App