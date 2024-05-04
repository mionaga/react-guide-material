import { useState } from "react";

import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: '買い物に行く'
    },
    {
      id: 2,
      content: '運動する'
    },
    {
      id: 3,
      content: 'いとちゃんと遊ぶ'
    }
  ];

  const [todos, setTodos] = useState(todosList);
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  return(
    <>
    <h2>Reminder</h2>
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form />
    </>
  );
};

export default Todo;