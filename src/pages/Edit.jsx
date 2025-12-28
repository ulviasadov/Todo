import { useEffect, useState } from "react"
import { updateTodo } from "../api/todoApi";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:5125/api/Todo";

export default function Edit() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [bodyText, setBodyText] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${BASE_URL}/${id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title);
                setBodyText(data.bodyText);
            });
    }, [id])

    return (
        <form onSubmit={() => updateTodo(id, title, bodyText)} className="form-container">
            <input type="text"
                className="form-input input-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input type="text"
                className="form-input input-body"
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
                placeholder="Text"
            />
            <button type="submit" className="form-create-button" onClick={() => navigate("/")}>Edit</button>
        </form>
    )
}