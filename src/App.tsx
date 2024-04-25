import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { AddTodo } from './comp-ts/inputTodo/AddTodo';


export type TodolistStateType = {
  title: string;
  id: string;
}

function App() {

  let todoState:Array<TodolistStateType> = []
  let [todolistState, setTodolistState] = useState(todoState) 
  let [todolistTitle, setTodolistTitle] = useState('')

  let err = ''


  function onClickHandler(title:string) {
    if(title.trim() !== '') {
      let newTodo = {id: '1', title: title}
      let newTodoState = [...todolistState, newTodo]
      setTodolistState(newTodoState)
      setTodolistTitle('')
    } else {
      alert('enter a name')
    }

  }

  function addTodoTitle(titleName:string) {
    setTodolistTitle(titleName)
  }

  function deleteItem(id: string) {

  }

  return(
    <div className='appWrapper'>
      <div className='addTodoBox'>
        <input 
        type="text"
        value = {todolistTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {addTodoTitle(e.currentTarget.value)}}
        />
        <button onClick={() => {onClickHandler(todolistTitle)}}>add todolist</button>
      </div>
      {todolistState.length > 0 ? <AddTodo list={todolistState} title={todolistTitle} err={err}/> : <span>you don't have any list</span>}
    </div>
  )
}

export default App;
