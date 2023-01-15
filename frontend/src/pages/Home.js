import { useState, useEffect} from "react";
import TodoForm from "../components/TodoForm";
import {useAuthContext} from "../hooks/useAuthContext";

// components
import TodoDetails from "../components/TodosDetails";
import { useTodosContext } from "../hooks/useTodosContext.js";


const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {todos, dispatch} = useTodosContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);

            const response = await fetch('/api/todos',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({type:'SET_TODOS',payload: json});
                setIsLoading(false);
            }
        }

        if(user){
            fetchTodos();
        }

    }, [dispatch, user]);

    return (
        <div className="home">

            <div className="todos">
                {isLoading && <div>Loading...</div>}
                {todos && todos.map((todo) => (
                    <TodoDetails key={todo._id} todo={todo} />
                ))}
                
            </div>

            <TodoForm />

        </div>
    )
}

export default Home;