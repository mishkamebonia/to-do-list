import "./CreateTodo.scss";
import { TodoProps } from "../App";
import { useState } from "react";
import { addTask } from "../functions/createTask";

const CreateTodo = ({ todos, setTodos }: TodoProps) => {
  const [titleValue, setTitleValue] = useState("");
  const [aboutValue, setAboutValue] = useState("");

  const handleAddTask = () => {
    addTask(titleValue, aboutValue, { todos, setTodos });
    setTitleValue("");
    setAboutValue("");
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
      <button onClick={handleAddTask}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default CreateTodo;
