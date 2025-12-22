const BASE_URL = "http://localhost:5125/api/Todo";

export async function getTodos() {
    const res = await fetch(`${BASE_URL}`);

    if (!res.ok) throw new Error("Get failed");

    const data = await res.json();
    return data;
}

export async function createTodo(title) {
    const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
    });

    if (!res.ok) throw new Error("Create failed");
}
