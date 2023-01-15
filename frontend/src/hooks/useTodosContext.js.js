import { TodosContext } from "../contexts/TodoContext";
import { useContext } from "react";

export const useTodosContext = () =>{
    const context = useContext(TodosContext);
    
if(!context){
    throw Error('useTodoscontext must be used inside an TodosContextProvider')
}

    return context;
}