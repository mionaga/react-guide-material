import { useState } from "react";

const Form = ({createTodo}) => {
    const [inputTodo, setInputTodo] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: inputTodo
        };
        createTodo(newTodo);
        setInputTodo("");
    }

    return (
        <form onSubmit={addTodo}>
            <input 
            type="text"
            value={inputTodo}
            onChange={(e) => {
                setInputTodo(e.target.value);
            }} 
            />
            <button onClick={addTodo}>追加</button>
        </form>

    );
};

export default Form;