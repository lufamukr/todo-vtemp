import React from "react";
import { TodolistStateType } from "../../App";
import s from "./AddTodo.module.css";

type AddTodoType = {
  title: string;
  list: Array<TodolistStateType>;
  err: string;
  delItem: (id: string) => void;
};

export const AddTodo = (props: AddTodoType) => {
  return (
    <div>
      <ul>
        {props.list.map((m) => {
          return (
            <ul className={s.todolistWrapper}>
              <li className={s.todolistTitle}>{m.title}</li>
              <button
                className={s.delItemBtn}
                onClick={() => {
                  props.delItem(m.id);
                }}
              >
                X
              </button>
            </ul>
          );
        })}
      </ul>
      {props.err.trim() !== "" ? <span>{props.err}</span> : ""}
    </div>
  );
};
