import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import Search from '../../components/search/search'


const TodoList = () => {

  //Get todoList from todoReducer
  const todoList = useSelector((state) => state.todos.todoList);

  //Selected todo 
  const [listOfTodo, setlistOfTodo] = useState();
  // set serch text
  const [searchText, setSearchText] = useState();

  const handleSearch = (value) => {
    // Access input value
    setSearchText(value)
    const query = value;
    // Create copy of item list
    var updatedList = [...todoList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.content.toString().toLowerCase().indexOf(query.toString().toLowerCase()) !== -1;
    });
    setlistOfTodo(updatedList)
  }

  const displayList = () => {
    if (listOfTodo?.length > 0 && searchText) {
      return (
        <ul className="collection">
          {
            listOfTodo.map(item => {
              return <TodoItem key={item.id} item={item} data-testid={`todo-${item.id}`} />
            })
          }
        </ul>
      )
    }
    else {
      if (todoList?.length > 0 && !searchText) {
        return (
          <ul className="collection">
            {
              todoList.map(item => {
                return <TodoItem key={item.id} item={item} data-testid={`todo-${item.id}`} />
              })
            }
          </ul>
        )
      } else if ((listOfTodo?.length < 1 && searchText)) {
        return <p className="center-align">We couldn't find any matches for <strong>{`"${searchText}"`}</strong></p>
      } else {
        return <p className="center-align">You don't have anything to do!</p>
      }
    }
  }

  return (
    <section id="section-todo">
      <h3 className="center-align white-text blue">Todo List</h3>
      <Search handleSearch={handleSearch} />
      {displayList()}
    </section>
  );
}

export default TodoList;