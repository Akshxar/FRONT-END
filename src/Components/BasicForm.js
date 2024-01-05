import React, { useState, useEffect } from "react";
import './BasicForm.Module.css'

const BasicForm = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [description, setDescription] = useState('');

  const saveDataToLocal = (key, prevdata) => {
    const currentData = JSON.parse(localStorage.getItem(key) || "[]");
    const newData = [...currentData, prevdata];
    localStorage.setItem(key, JSON.stringify(newData));
  }

  const getDataFromLocal = (key) => {
    return JSON.parse(localStorage.getItem(key) || "[]");
  }

  

  // Refresh Function:
  useEffect(() => {
    const saveTodosList = getDataFromLocal("TodoList");
    const saveCompletedTodosList = getDataFromLocal("CompletedTodosList");

    if (saveTodosList) {
      setTodos(saveTodosList);
    }
    if (saveCompletedTodosList) {
      setCompletedTodos(saveCompletedTodosList);
    }

  }, [])

  // SubmitHandler : 
  const submitHandler = (event) => {
    event.preventDefault();

    setTodoName("");
    setDescription("");

    const newTodo = { _id: Date.now(), todoName, description };
    setTodos([...todos, newTodo]); //updateState
    saveDataToLocal('TodoList', newTodo);
  };

  // DoneTodo
  const doneTodo = (id) => {
    const completedTodo = todos.find(todo => todo._id === id);
    setCompletedTodos([...completedTodos, completedTodo]);
    saveDataToLocal('CompletedTodosList', completedTodo);

    // delete todo 
    deleteTodo(id)
  };

  // DeleteTodo
  const deleteTodo = (id) => {
    const currentTodos = JSON.parse(localStorage.getItem('TodoList') || "[]");
    const updatedTodos = currentTodos.filter(todo => todo._id !== id);
    localStorage.setItem('TodoList', JSON.stringify(updatedTodos));
    setTodos(updatedTodos); // Update state
  };


  return (
    <div>
      <form onSubmit={submitHandler} className="myForm">
        <div>
          <label htmlFor="todoName">TODONAME</label>
          <input
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            type="text"
          />

          <label htmlFor="description">DESCRIPTION</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />

          <center>
            <button type="submit" className="btn-control">
              ADD TODO
            </button>
          </center>
        </div>
      </form>

      <h2 className="todolist">TODO LIST</h2>
      <ul className="ulclass">
        {todos.map((todo) => (
          <li key={todo._id} className="ullist">
            {todo.todoName} - {todo.description}
            <button className="ulbutton" onClick={() => doneTodo(todo._id)}>Done</button>
            <button className="ulbutton" onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2 className="donelist">TODO COMPLETED LIST:</h2>
      <ul className="ulclass">
        {completedTodos.map((todo) => (
          <li key={todo._id} className="ullist">
            {todo.todoName} - {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BasicForm;
