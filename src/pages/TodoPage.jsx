import { useEffect, useState } from "react";
import { getTodos } from "../api/todoApi";

export default function TodoPage(){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(setTodos);
    }, []);

    return (
        <>
            {todos.map(t => <div key={t.Id}>{t.Title}</div>)}
        </>
    )
}