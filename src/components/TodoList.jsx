import { deleteTodo, getTodos } from "../api/todoApi"
import "../assets/todoList.css";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoPage from "../pages/TodoPage";

const staticData = [
    { id: "1", title: "Header1", bodyText: "NeseNeseNese1" },
    { id: "2", title: "Header2", bodyText: "jdkdjlfjdfjkdjf fjslkdjfl jflkdjfldjfldlkj jdkjflsdjf jkdjflsdkjf jdflksjflsdjlfkjdl jdkhdh jkj  kdkl" },
    { id: "3", title: "Header3", bodyText: "NeseNeseNese3" },
]

export default function TodoList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const todos = await getTodos();

                if (!todos || todos.length === 0) {
                    setData(staticData);
                }
                else {
                    setData(todos);
                }
            }
            catch (err) {
                console.error(err);
                setData(staticData);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchTodos();
    }, [data])

    return (
        <div className="main-container">
            {isLoading
                ? <div>Loading...</div>
                : <>
                    {data.map(todo => (
                        <div key={todo.id} className="todo-container">
                            <h1 className="todo-header">{todo.title}</h1>
                            <h3 className="todo-body">{todo.bodyText}</h3>
                            <div className="button-container">
                                <button className="button button-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                    <TodoForm setData={setData} />
                </>
            }
        </div>
    )
}