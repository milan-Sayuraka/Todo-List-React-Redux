import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    const navigate = useNavigate();
    // handle OBJ when Navigate
    const { state } = useLocation();

    //Get todoList from todoReducer
    const todoList = useSelector(state => state.todos.todoList);

    //Use for all the dispatch actions
    const dispatch = useDispatch();

    //Local state for the input
    const [inputTodo, setInputTodo] = useState(state.content);
    //Local state for the input error message
    const [errMsg, setErrMsg] = useState('');

    //Handle onChange event
    const handleInput = (e) => {
        setInputTodo(e.target.value);
    }

    const updateTodo = () => {
        if (inputTodo.trim().length > 1) {
            setErrMsg('');
            //finding index of the item
            const index = todoList.findIndex(todo => todo.id === state.id);
            //making a new array
            const newArray = [...todoList];
            //changing value in the new array
            newArray[index].content = inputTodo
            //Add new todo item into List with the action
            dispatch({ type: 'UPDATE_TODO', payload: newArray })
            //Empty input 
            setInputTodo('');
            // redirect to list component
            navigate('/');
        }
        else {
            //Display Error message
            setErrMsg('Please input something...');
        }

    }

    return (
        <section id="section-todo">
            <h3 className="center-align white-text blue">Update Todo List</h3>

            <div className="row">
                <p className="red-text err-msg col s12 center-align">
                    {errMsg}
                </p>
                <div className="input-field col s10">
                    <input onChange={handleInput} value={inputTodo} placeholder="Type todo here" id="todo-input" type="text" />
                    <label htmlFor="todo-input" className="active">Update Todo</label>
                </div>
                <button className="btn col s2 blue" onClick={updateTodo} >Update</button>
            </div>
        </section>
    );
}

export default Update;