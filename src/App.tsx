import { useState } from "react";
import "./App.scss";
import CreateTodo from "./components/CreateTodo";
import Tasks from "./components/Tasks";

export interface TodoObject {
  id: string;
  title: string;
  about: string;
}

function App() {
  const [todos, setTodos] = useState<TodoObject[]>([]);

  return (
    <div className="container">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <Tasks todos={todos} />
    </div>
  );
}

export default App;
