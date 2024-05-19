export let state:StateType = {
  todolists: [
    {
      nameTodo: "1",
      idTodo: "1",
      tasks: [{ titleTask: "1", idTask: "1" }],
    },
  ],
};

type StateType = {
  todolists: Array<TodolistsType>
}

export type TodolistsType = {
  nameTodo: string;
  idTodo: string;
  tasks: Array<TasksType>
}

type TasksType = {
  titleTask: string; 
  idTask: string;
}