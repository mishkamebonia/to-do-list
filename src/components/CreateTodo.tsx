import "./CreateTodo.scss";
import { TodoObject } from "../App";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface CreateTodoProps {
  todos: TodoObject[];
  setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ todos, setTodos }) => {
  const [titleValue, setTitleValue] = useState("");
  const [aboutValue, setAboutValue] = useState("");

  const addTodo = () => {
    if (titleValue !== "" && aboutValue !== "") {
      const newItem = [
        ...todos,
        {
          id: uuidv4(),
          title: titleValue,
          about: aboutValue,
        },
      ];

      setTodos(newItem);
      setTitleValue("");
      setAboutValue("");
    }
  };

  return (
    <div className="create-item">
      <section>
        <input
          type="text"
          placeholder="Title..."
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="About..."
          value={aboutValue}
          onChange={(e) => setAboutValue(e.target.value)}
        />
      </section>
      <button onClick={addTodo}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default CreateTodo;
