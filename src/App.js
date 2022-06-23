import React, { useState,useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Todoslist from "./components/Todolist";

function App() {
  const initialState=JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setEditTodo={setEditTodo}
            editTodo={editTodo}
            setTodos={setTodos}
          />
        </div>
        <div>
          <Todoslist
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
