import { useState } from 'react';

import List from './List';
import Form from './Form';

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            content: 'いとちゃんと遊ぶ'
        },
        {
            id: 2,
            content: '買い物に行く'
        },
        {
            id: 3,
            content: '運動する'
        }
    ]);

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id
        });
        setTodos(newTodos);
    };

    const addTodo = (todo) => {
        setTodos(
            [...todos, todo]
        );
    };

    return (
        <>
        <h2>Reminder</h2>
        <List todos = {todos} deleteTodo={deleteTodo} />
        <Form addTodo={addTodo} />
        </>
    );
};

export default Todo;
