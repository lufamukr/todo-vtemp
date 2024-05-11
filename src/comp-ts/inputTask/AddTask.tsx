import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { EditebleSpan } from "../editebleSpan/EditebleSpan";
import { TodolistStateType } from "../../App";

type AddTaskType = {
  idTodo: string;
  state: Array<TodolistStateType>;
  addTask: (title: string) => void;
  giveSetTaskTitle: (title: string) => void;
  taskTitle?: string;
};

export const AddTask = (props: AddTaskType) => {
  let title = "";
  let currTodo = props.idTodo


  function keyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
    if (props.taskTitle) {
      title = props.taskTitle;
      if (e.code === "Enter") {
        props.addTask(title);
      }
    }
    
  }

  return (
    <div>
      <input
        type="text"
        value={props.taskTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          props.giveSetTaskTitle(e.currentTarget.value);
        }}
        onKeyUp={keyPressHandler}
      />
      <button
        onClick={() => {
          props.addTask(title);
        }}
      >
        +
      </button>
      {props.state.length > 0 ? (
        <ul>
          {props.state.map((m) => {
            return (
              <li>
                <EditebleSpan
                  title={m.title}
                  onEnter={() => {}}
                  id={m.id}
                  editSpan={() => {}}
                  idTodo={props.idTodo}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
