import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  
  return (
    <>
      <h1 className='text-center p-4 text-2xl font-bold'>learning about the redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
