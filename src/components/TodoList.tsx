import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {

    const { loading, error, todos, limit, page} = useTypedSelector(state => state.todo);
    const {fetchTodos} = useActions();

    useEffect(() => {
        fetchTodos(page, limit);
    }, [fetchTodos, page, limit])

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return (
        <div>
            {todos.map(item=>{
                return(
                    <div key={item.id}>{item.id} - {item.title}</div>
                )
            })}
        </div>
    );
};

export default TodoList;
