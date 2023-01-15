const todosReducer = (state, action) => {
    switch (action.type){
        case 'SET_TODOS':
            return{
                todos:action.payload
            }
        case 'CREATE_TODO':
            return{
                todos: [action.payload, ...state.todos]
            }
        case 'DELETE_TODO':
            return{
                todos: state.todos.filter((todo)=> todo._id !== action.payload._id )
            }
        default:
            return state 
    }
}
 
export default todosReducer;