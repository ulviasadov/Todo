import { getTodos } from "../api/todoApi"
import "../assets/todoList.css";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Search from "./Search";
import Todo from "./Todo";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const staticData = [
    { id: "1", title: "Header1", bodyText: "NeseNeseNese1" },
    { id: "2", title: "Header2", bodyText: "jdkdjlfjdfjkdjf fjslkdjfl jflkdjfldjfldlkj jdkjflsdjf jkdjflsdkjf jdflksjflsdjlfkjdl jdkhdh jkj  kdkl" },
    { id: "3", title: "Header3", bodyText: "NeseNeseNese3" },
]

export default function TodoList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        async function fetchTodos() {
            try {
                const todos = await getTodos(searchValue);

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
    }, [data, searchValue])

    return (
        <div className="main-container">
            <Search setSearchValue={setSearchValue} />
            {isLoading
                ? <Loading />
                : <Todo data={data} />
            }
            <TodoForm setData={setData} />
        </div>
    )
}