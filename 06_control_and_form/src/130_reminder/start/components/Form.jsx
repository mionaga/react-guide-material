import { useState } from "react";

const Form = ({addTodo}) => {
    const [inputTodo, setInputTodo] = useState("");
    const handleInput = (e) => {
        setInputTodo(e.target.value);
    };
    const handleAddTodo = () => {
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content:  inputTodo
        }
        addTodo(newTodo);
        setInputTodo("");
    }

    return (
        <>
        <input 
        type="text"
        value={inputTodo}
        onChange={handleInput}
        />
        <span>{inputTodo}</span>
        <button type="button" onClick={handleAddTodo}>追加</button>
        </>
    );
};

export default Form;