import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

//Single todo item component
const TodoItem = (props) => {
    const navigate = useNavigate();
    //Get todoList from todoReducer
    const todoList = useSelector(state => state.todos.todoList)
    //Use for all the dispatch actions
    const dispatch = useDispatch();

    //Remove single todo in the list
    const removeTodoItem = (todoId) => {
        console.log('remove call', todoId)
        //filter to get the todoId which need to be remove
        let newTodoList = todoList.filter(item => item.id !== todoId);
        // dispatch
        dispatch({ type: 'REMOVE_TODO', payload: newTodoList })

    }

    return (
        <li className="collection-item" key={props.item.id}>{props.item.content}

            <span
                onClick={() => {
                    // remove todo items
                    removeTodoItem(props.item.id)
                }}
                className="secondary-content">
                <i className="remove-btn material-icons blue-text">clear</i>
            </span>
            <span
                onClick={() => {
                    // navigate to update screen
                    navigate('/update', { state: props.item });
                }}
                className="secondary-content">
                <i className="material-icons blue-text">edit</i>
            </span>
        </li>
    );
}

export default TodoItem;