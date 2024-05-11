import React from "react";
import { TodolistStateType } from "../../App";
import s from "./AddTodo.module.css";
import { AddTask } from "../inputTask/AddTask";

type AddTodoType = {
  title: string;
  list: Array<TodolistStateType>;
  err: string;
  delItem: (id: string) => void;
  idTodo: string;
  addTask: (title: string) => void;
  giveSetTaskTitle: (title: string) => void;
  taskTitle?: string;
};

export const AddTodo = (props: AddTodoType) => {
  return (
    <div>
      <ul>
        {props.list.map((m) => {
          return (
            <ul className={s.todolistWrapper} key={m.id}>
              <li>
                <span className={s.todolistTitle}>{m.title}</span>
                <AddTask
                  idTodo={props.idTodo}
                  state={props.list}
                  addTask={props.addTask}
                  giveSetTaskTitle={props.giveSetTaskTitle}
                  taskTitle={props.taskTitle}
                />
                <button
                  className={s.delItemBtn}
                  onClick={() => {
                    props.delItem(m.id);
                  }}
                >
                  X
                </button>
              </li>
            </ul>
          );
        })}
      </ul>
      {props.err.trim() !== "" ? <span>{props.err}</span> : ""}
    </div>
  );
};
