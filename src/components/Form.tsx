import "./Form.scss";
import { useState } from "react";

interface Props {
  onCreateTodo: (title: string, about: string) => void;
}
const Form = (props: Props) => {
  const { onCreateTodo } = props;

  const [titleValue, setTitleValue] = useState("");
  const [aboutValue, setAboutValue] = useState("");

  const handleAddTask = () => {
    if (titleValue !== "" && aboutValue !== "") {
      onCreateTodo(titleValue, aboutValue);
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
      <button onClick={() => handleAddTask()}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default Form;
