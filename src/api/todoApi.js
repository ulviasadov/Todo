const BASE_URL = "http://localhost:5125/api/Todo";

export async function getTodos(search = "") {
    const query = search.trim()
        ? `?search=${encodeURIComponent(search.trim())}`
        : "";

    const res = await fetch(`${BASE_URL}${query}`);

    if (!res.ok) throw new Error("Get failed");

    return await res.json();
}

export async function createTodo(title, bodyText) {
    const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, bodyText: bodyText })
    });

    if (!res.ok) throw new Error("Create failed");
}

export async function deleteTodo(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });

    if (!res.ok) throw new Error("Todo not founded!");
}

export async function updateTodo(id, title, bodyText) {
    await fetch(`${BASE_URL}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: Number(id), title, bodyText })
    });
}
