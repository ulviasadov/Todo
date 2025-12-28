import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../api/todoApi";

export default function Todo({ data }) {
    const navigate = useNavigate();

    return <div className="todo-container">
        {data.map(todo => (
            <div key={todo.id} className="todo">
                <h1 className="todo-header">{todo.title}</h1>
                <h3 className="todo-body">{todo.bodyText}</h3>
                <div className="button-container">
                    <button className="button button-edit" onClick={() => navigate(`/edit/${todo.id}`)}>Edit</button>
                    <button className="button button-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            </div>
        ))}
    </div>
}