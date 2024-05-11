import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { AddTodo } from "./comp-ts/inputTodo/AddTodo";
import { v4 as uuidv4 } from "uuid";

export type TaskStateType = {
  titleTask: string;
  id: string;
};

export type TodolistStateType = {
  title: string;
  id: string;
  tasks?: Array<TaskStateType>;
};

const App = () => {
  let [taskState, setTaskState] = useState<Array<TaskStateType>>([]);
  let [taskTitle, setTaskTitle] = useState("");

  function addTask(title: string) {
    if (taskTitle.trim() !== "") {
      let newTask = { titleTask: title, id: uuidv4() };
      setTaskState([...taskState, newTask]);
      setTaskTitle("");
    } else {
    }
  }

  function giveSetTaskTitle(title: string) {
    setTaskTitle(title);
  }

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
        todolistState.map((m) => {
          return (
            <AddTodo
              list={todolistState}
              title={todolistTitle}
              err={err}
              delItem={deleteItem}
              idTodo={m.id}
              addTask={addTask}
              giveSetTaskTitle={giveSetTaskTitle}
              taskTitle={taskTitle}
            />
          );
        })
      ) : (
        <span>you don't have any list</span>
      )}
    </div>
  );
};

export default App;
