import { useEffect, useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

export interface TodoObject {
  id: string;
  title: string;
  about: string;
}

export interface TodoProps {
  todos: TodoObject[];
  setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>;
}

const initialTodosRaw = localStorage.getItem("todos");
const initialTodos = initialTodosRaw ? JSON.parse(initialTodosRaw) : null;

function App() {
  const [todos, setTodos] = useState<TodoObject[]>(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div className="container">
        <Form todos={todos} setTodos={setTodos} />
        <Tasks todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
