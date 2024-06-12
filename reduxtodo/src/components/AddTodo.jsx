import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../featurs/todo/todoSlice"

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <div>
      <form onSubmit={addTodoHandler} className="flex w-3/5 items-center align-center  ">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 ml-96"
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-2 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
