import React, { useState } from 'react';
import './App.css';
import { Todolists } from './comp-ts/todolists/Todolists';
import { TodolistsType } from './State';

function App() {
  
let todolists:Array<TodolistsType> = [
  {id: 1, title: 'hard skill'},
  {id: 2, title: 'soft skill'},
];

let [todolistTitle, setTodolistTitle] = useState('');
let [todolistState, setTodolistState] = useState(todolists);

let todolistItems:Array<TodolistsType> = [
  {id: 11, title: 'JS'},
  {id: 12, title: 'React'},
]

let todolistItems2:Array<TodolistsType> = [
  {id: 21, title: 'eng'},
  {id: 22, title: 'cz'},
]

function addTodolist() {
  let newTodolist = {id: 3, title: todolistTitle}
  todolistState.push(newTodolist)
  setTodolistTitle('')
  setTodolistState([...todolistState])
}

function addTitleTodo(val:string) {
  setTodolistTitle(val)
}

  return (
    <div className="App">
  
      <Todolists todolists={todolistState} addTodo={addTodolist} addTitleTodo={addTitleTodo} todolistTitle={todolistTitle}/>
    </div>
  );
}

export default App;
