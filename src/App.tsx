import { useState } from "react";
import "./App.scss";
import CreateTodo from "./components/CreateTodo";
import Tasks from "./components/Tasks";

interface TodoObject {
  id: string;
  title: string;
  about: string;
}

export interface TodoProps {
  todos: TodoObject[];
  setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>;
}

function App() {
  const [todos, setTodos] = useState<TodoObject[]>([]);

  return (
    <div>
      <div className="container">
        <CreateTodo todos={todos} setTodos={setTodos} />
        <Tasks todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
