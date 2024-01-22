import { useEffect, useState } from "react";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
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
  const [todos, setTodos] = useState<TodoObject[]>(initialTodos || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCreateTodo = (title: string, about: string) => {
    const newItem = [
      {
        id: uuidv4(),
        title: title,
        about: about,
      },
      ...todos,
    ];

    setTodos(newItem);
  };

  const handleEditTodo = (id: string, title: string, about: string) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          title: title,
          about: about,
        };
      }

      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="container">
        <Form onCreateTodo={handleCreateTodo} />
        <Tasks todos={todos} setTodos={setTodos} onEditTodo={handleEditTodo} />
      </div>
    </div>
  );
}

export default App;
