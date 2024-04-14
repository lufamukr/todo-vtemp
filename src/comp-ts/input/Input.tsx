import React, { ChangeEvent, useState } from "react";
import st from "./Input.module.css";

type InputType = {
  type: string;
  addTitle: (val:string) => void;
  todolistTitle: string;
}

export const Input = (props:InputType) => {
  
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {props.addTitle(e.currentTarget.value)}

  return(
    <input type={props.type} className={st.input} onChange={onChange} value={props.todolistTitle}/>
  )
}