import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { AddTodo } from "./comp-ts/inputTodo/AddTodo";
import { v4 as uuidv4 } from "uuid";

export type TodolistStateType = {
  title: string;
  id: string;
};

const App = () => {
  let todoState: Array<TodolistStateType> = [];
  let [todolistState, setTodolistState] = useState(todoState);
  let [todolistTitle, setTodolistTitle] = useState("");

  let err = "";

  function onClickHandler(title: string) {
    if (title.trim() !== "") {
      let newTodo = { id: uuidv4(), title: title };
      let newTodoState = [...todolistState, newTodo];
      setTodolistState(newTodoState);
      setTodolistTitle("");
    } else {
      alert("enter a name");
    }
  }

  function addTodoTitle(titleName: string) {
    setTodolistTitle(titleName);
  }

  function deleteItem(id: string) {
    let newTodolistState = todolistState.filter((f) => {
      return f.id !== id;
    });
    setTodolistState(newTodolistState);
  }

  return (
    <div className="appWrapper">
      <div className="addTodoBox">
        <input
          type="text"
          value={todolistTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            addTodoTitle(e.currentTarget.value);
          }}
        />
        <button
          onClick={() => {
            onClickHandler(todolistTitle);
          }}
        >
          add todolist
        </button>
      </div>
      {todolistState.length > 0 ? (
        <AddTodo
          list={todolistState}
          title={todolistTitle}
          err={err}
          delItem={deleteItem}
        />
      ) : (
        <span>you don't have any list</span>
      )}
    </div>
  );
};

export default App;
