import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const AddNew = () => {
  const navigate = useNavigate();

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  //Local state for the input
  const [inputTodo, setInputTodo] = useState('');
  //Local state for the input error message
  const [errMsg, setErrMsg] = useState('');

  //Handle onChange event
  const handleInput = (e) => {
    setInputTodo(e.target.value);
  }

  //Handle onClick event
  const addNewTodo = () => {
    //Valid input value
    if (inputTodo.trim().length > 1) {
      setErrMsg('');
      let newTodoObject = {
        id: Math.random(),
        content: inputTodo
      }
      //Add new todo item into List with the action
      dispatch({ type: 'ADD_TODO', payload: newTodoObject });
      //Empty input 
      setInputTodo('');
      navigate('/');
    }
    else {
      //Display Error message
      setErrMsg('Please input something...');
    }


  }

  return (
    <section id="section-todo">
      <h3 className="center-align white-text blue">Add New Todo</h3>

      <div className="row">
        <p className="red-text err-msg col s12 center-align">
          {errMsg}
        </p>
        <div className="input-field col s10">
          <input onChange={handleInput} value={inputTodo} placeholder="Type todo here" id="todo-input" type="text" />
          <label htmlFor="todo-input" className="active">New Todo</label>
        </div>
        <button className="btn col s2 blue" onClick={addNewTodo} >Add</button>
      </div>
    </section>
  );
}

export default AddNew;