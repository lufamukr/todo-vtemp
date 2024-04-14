import React from "react";
import st from './Todolists.module.css';
import { Input } from "../input/Input";
import { TodolistsType } from "../../State"

type TodolistsCompType = {
  todolists: Array<TodolistsType>;
  addTodo: () => void;
  addTitleTodo: (val:string) => void;
  todolistTitle: string;
}

export const Todolists = (props: TodolistsCompType) => {
  return(
    <div className={st.border}>
      <Input type="text" addTitle={props.addTitleTodo} todolistTitle={props.todolistTitle}/>
      <button onClick={props.addTodo}>Add</button>
      <div className={props.todolists.length > 0 ? st.todolist : ''}>
        <ul>
          {
            props.todolists.map( (m) => {
              return (<li>{m.title}</li>)
            })
          }
        </ul>
      </div>
    </div>
  )
}