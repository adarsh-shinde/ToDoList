import {createContext, useReducer} from 'react';
import todosReducer from '../reducers/todosReducer';

export const TodosContext = createContext();

export const TodosContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(todosReducer,{
        todos:null
    });

    return ( 
        <TodosContext.Provider value={{...state, dispatch}}>
              {children}
        </TodosContext.Provider>
     );
}
 
