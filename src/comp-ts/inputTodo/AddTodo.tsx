import React from "react";
import { TodolistStateType } from "../../App";
import s from "./AddTodo.module.css";

type AddTodoType = {
  title: string;
  list: Array<TodolistStateType>;
  err: string;
};

export const AddTodo = (props: AddTodoType) => {
  return (
    <div className={s.todolistWrapper}>
      <button className={s.delItemBtn}>X</button>
      <ul>
        {props.list.map((m) => {
          return <li>{m.title}</li>;
        })}
      </ul>
      {props.err.trim() !== "" ? <span>{props.err}</span> : ""}
    </div>
  );
};
