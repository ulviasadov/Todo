import TodoList from "./components/TodoList";
import "./assets/app.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

export default function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route index element={<TodoList />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
}
