import "./Tasks.scss";
import { useState } from "react";
import { TodoProps } from "../App";
import { alertRemoveTask } from "../functions/alertRemoveTask";
import { toggleAccordion } from "../functions/accordionTask";
import Alert from "./Alert";

const Task = (props: TodoProps) => {
  const { todos, setTodos } = props;

  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [activeAlert, setActiveAlert] = useState<string | null>(null);

  const handleAlertRemoveTask = (id: string) => {
    alertRemoveTask(id, activeAlert, setActiveAlert);
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
              <div className="display">
                <section onClick={() => handleToggleAccordion(todo.id)}>
                  <h3>{todo.title}</h3>
                  <p>{todo.about}</p>
                </section>
                <button
                  onClick={() => handleAlertRemoveTask(todo.id)}
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
              {activeAlert === todo.id && (
                <Alert
                  id={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                  activeAlert={activeAlert}
                  setActiveAlert={setActiveAlert}
                ></Alert>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Task;
