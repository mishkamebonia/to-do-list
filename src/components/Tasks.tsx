import "./Tasks.scss";
import { useState } from "react";
import { TodoProps } from "../App";
import { removeTask } from "../functions/removeTask";
import { toggleAccordion } from "../functions/accordionTask";

const Task = ({ todos, setTodos }: TodoProps) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const handleRemoveTask = (id: string) => {
    removeTask(id, { todos, setTodos });
  };

  const handleToggleAccordion = (id: string) => {
    toggleAccordion(id, activeAccordion, setActiveAccordion);
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
              <div
                className="display"
                onClick={() => handleToggleAccordion(todo.id)}
              >
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
                  <button>
                    <i className="fa-solid fa-share-nodes"></i>
                  </button>
                  <button>
                    <i className="fa-solid fa-info"></i>
                  </button>
                  <button>
                    <i className="fa-solid fa-pen"></i>
                  </button>
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
