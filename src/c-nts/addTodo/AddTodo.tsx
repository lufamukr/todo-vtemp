import React, { ChangeEvent } from "react";
import { Todolist } from "../todolist/Todolist";
import { TodolistsType } from "../../state";

type AddTodoType = {
  state:Array<TodolistsType>;
  addTodolist: (title:string) => void;
  titleTodo: string;
  getTodoName: (title:string) => void;
}

export function AddTodo(props: AddTodoType) {

  const onClickHandler = (titleTodo:string) => {
    props.addTodolist(titleTodo)
  }

  return (
    <div>
      <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>) => {props.getTodoName(e.currentTarget.value)}} value={props.titleTodo}/>
      <button onClick={() => {onClickHandler(props.titleTodo)}}>add todolist</button>

      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', gap: '20px'}}>
      {props.state.length > 0 ? props.state.map((m) => {
        return(
          <Todolist titleTodo={m.nameTodo}/>
        )
      }) : ''}
      </div>
    </div>
  );
}
