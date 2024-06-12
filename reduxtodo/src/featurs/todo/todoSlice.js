// import a createSlice from redus toolkit
import { createSlice, nanoid } from "@reduxjs/toolkit";

// and then initialState to give them a innital value to store and then we create a reducers in our reducer files
const initialState = {
  todos: [{ id: 1, text: "hello" }],
};

// to create a reducer  we first give them name: "", initialState and define a reducer: to define a reducer we have to set a state and action that could be one or more reducer in the reducer
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },


  },
});


// after define a reducer we have to export them individual like :-
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;


