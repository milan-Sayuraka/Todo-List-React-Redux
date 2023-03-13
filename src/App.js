import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import SimpleCounter from './views/SimpleCounter';
import TodoList from './screens/todoList/todolist';
import AddNew from './screens/addNew/addNew';
import Update from './screens/update/update';
// import NameCard from './views/NameCard';
import NavBar from './components/navBar/navBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<div className="container">Loading...</div>}>
      <main className="container">
      <Routes>
             <Route path="/" element={<TodoList />} />
             <Route path="/addNew" element={<AddNew />} />
             <Route path="/update" element={<Update />} />
          </Routes>
      </main>
      </Suspense>
    </div>
  );
}

export default App;
