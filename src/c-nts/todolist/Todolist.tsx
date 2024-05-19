import React from "react";

type TodolistType = {
  titleTodo:string;
}

export function Todolist(props:TodolistType) {
  return (
    <div style={{padding:'10px 100px', border:'1px solid'}}>
      <span style={{textTransform:'uppercase', color:'#cacaca', fontWeight:'700', letterSpacing:'1px'}}>{props.titleTodo}</span>
    </div>
  );
}