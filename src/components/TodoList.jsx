import { getTodos } from "../api/todoApi"
import "../assets/app.css";
import { useEffect, useState } from "react";

export default function TodoList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            setData(await getTodos());
        }

        fetchTodos();
    }, [])
    
    return (
        <>
            {data.map(todo => (
                <div key={todo.id} className="todo-container">
                    <h1 className="todo-header">{todo.title}</h1>
                    <h3 className="todo-body">{todo.bodyText}</h3>
                </div>
            ))}
        </>
    )
}