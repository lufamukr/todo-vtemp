import React, { ChangeEvent, useState } from "react";

export const AddTask = () => {

  type TaskStateType = {
    title: string;
  }

  let [taskState, setTaskState] = useState<Array<TaskStateType>>([])
  let [taskTitle, setTaskTitle] = useState('')
  function addTask(title: string) {
    if(taskTitle.trim() !== '') {
      let newTask = {title: title} 
      setTaskState([...taskState, newTask])
      setTaskTitle('')
    } else {

    }
  }

  return(
    <div>
      <input type="text" value={taskTitle} onChange={(e:ChangeEvent<HTMLInputElement>) => {setTaskTitle(e.currentTarget.value)}}/>
      <button onClick={()=>{addTask(taskTitle)}}>+</button>
      {taskState.length > 0 ? <ul>
        {taskState.map((m) => {
          return (<li>{m.title}</li>)
        })}
      </ul> : ''}
    </div>
  )
}