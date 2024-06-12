import { configureStore } from "@reduxjs/toolkit";
import todoReducer from  "../featurs/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer
})



