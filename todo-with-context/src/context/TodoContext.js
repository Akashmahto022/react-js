import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "Todo Message",
            complete: false
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    completeTodo:(id)=>{}
})

export const TodoProvider = TodoContext.Provider

export const UseTodo = ()=>{
    return useContext(TodoContext)
}
