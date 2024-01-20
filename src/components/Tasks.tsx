import "./Tasks.scss";
import { TodoProps } from "../App";
import { removeTask } from "../functions/removeTask";
import { useState } from "react";

const Task = ({ todos, setTodos }: TodoProps) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const handleRemoveTask = (id: string) => {
    removeTask(id, { todos, setTodos });
  };

  const toggleAccordion = (id: string) => {
    if (id === activeAccordion) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
    console.log(activeAccordion);
  };

  return (
    <div className="tasks">
      {todos.length === 0 ? (
        <div className="empty-tasks">
          <p>No tasks</p>
        </div>
      ) : (
        todos.map((todo) => {
          return (
            <div key={todo.id} className="task">
              <div className="display" onClick={() => toggleAccordion(todo.id)}>
                <section>
                  <h3>{todo.title}</h3>
                  <p>{todo.about}</p>
                </section>
                <button
                  onClick={() => handleRemoveTask(todo.id)}
                  className="remove-btn"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              {activeAccordion === todo.id && (
                <div className="addition-btns">
                  <p>123</p>
                  <p>456</p>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Task;
