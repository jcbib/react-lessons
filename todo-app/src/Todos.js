import React from 'react';
import {TodoElements, DoneElement, TodoContainer} from './app-styles';

export const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <TodoElements onClick={() => {deleteTodo(todo.id)}} className="collection-item" key={todo.id}>
                    <span style={{color:"#FFFFFF", fontSize:"18"}}>{todo.content}</span>
                </TodoElements>
            )
        })
    ) : (
        <DoneElement>Nothing left to do!</DoneElement>
    );
    return(
        <TodoContainer className="todos collection">
            {todoList}
        </TodoContainer>
    )
}