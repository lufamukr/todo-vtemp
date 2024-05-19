import React, { useState } from "react";
import { state } from "./state";
import "./App.css";
import { AddTodo } from "./c-nts/addTodo/AddTodo";

function App() {

  let [todolistState, setTodolistState] = useState(state.todolists)
  let [todolistTitle, setTodolistTitle] = useState('')

  const addTodolist = (title:string) => {
    console.log(todolistState)
    let newTodolist = {
      nameTodo: todolistTitle,
      idTodo: "1",
      tasks: [{ titleTask: "1", idTask: "1" }],
    }
    setTodolistState([...todolistState, newTodolist])
    setTodolistTitle('')
  }

  const getTodoName = (title:string) => {
    setTodolistTitle(title)
  }


  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
          color: "teal",
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        learn react by making todolist
      </h1>

      <main className="main">
        <AddTodo state={todolistState} addTodolist={addTodolist} titleTodo={todolistTitle} getTodoName={getTodoName}/>
      </main>
    </div>
  );
}

export default App;
