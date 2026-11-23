import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  // Load dari localStorage saat mount 
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  // Simpan ke localStorage saat todos berubah 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const tambah = (teks) => {
    setTodos([...todos, { id: Date.now(), teks, selesai: false }]);
  };
  const hapus = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };
  const toggle = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, selesai: !t.selesai } : t
    ));
  };
  
  return (
    <div className="app">
      <h1>📝 To-Do List React</h1>
      <TodoForm onTambah={tambah} />
      <TodoStats todos={todos} />
      <TodoList todos={todos} onHapus={hapus} onToggle={toggle} />
    </div>
  );
} 