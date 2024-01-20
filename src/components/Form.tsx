import "./Form.scss";
import { TodoProps } from "../App";
import { useState } from "react";
import { addTask } from "../functions/createTask";

const Form = ({ todos, setTodos }: TodoProps) => {
  const [titleValue, setTitleValue] = useState("");
  const [aboutValue, setAboutValue] = useState("");

  const handleAddTask = () => {
    addTask(titleValue, setTitleValue, aboutValue, setAboutValue, {
      todos,
      setTodos,
    });
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

export default Form;
