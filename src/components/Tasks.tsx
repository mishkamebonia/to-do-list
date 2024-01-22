import "./Tasks.scss";
import { useState } from "react";
import { TodoProps } from "../App";
import { alertRemoveTask } from "../functions/alertRemoveTask";
import { toggleAccordion } from "../functions/accordionTask";
import AlertRemove from "./AlertRemove";

const Task = (props: TodoProps) => {
  const { todos, setTodos } = props;

  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [removeAlert, setRemoveAlert] = useState<string | null>(null);
  const [editAlert, setEditAlert] = useState<string | null>(null);

  const handleAlertRemoveTask = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    alertRemoveTask(id, removeAlert, setRemoveAlert);
  };

  const handleToggleAccordion = (id: string) => {
    toggleAccordion(id, activeAccordion, setActiveAccordion);
  };

  // ! edit
  const handleEditModule = (id: string) => {
    if (id === editAlert) {
      setEditAlert(null);
    } else {
      setEditAlert(id);
    }
  };

  const onClickEditSubmit = (id: string) => {
    console.log(id);
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
                className="card-todo"
                onClick={() => handleToggleAccordion(todo.id)}
              >
                <div className="description">
                  <h3>{todo.title}</h3>
                  <p>{todo.about}</p>
                </div>
                <button
                  onClick={(e) => handleAlertRemoveTask(e, todo.id)}
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
                  <button onClick={() => handleEditModule(todo.id)}>
                    <i className="fa-solid fa-pen"></i>
                  </button>
                </div>
              )}
              {removeAlert === todo.id && (
                <AlertRemove
                  id={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                  removeAlert={removeAlert}
                  setRemoveAlert={setRemoveAlert}
                ></AlertRemove>
              )}
              {editAlert === todo.id && (
                <div>
                  <input type="text" value={todo.title} on />
                  <textarea cols="30" rows="10" value={todo.about}></textarea>
                  <button onClick={() => onClickEditSubmit(todo.id)}>
                    edit
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
