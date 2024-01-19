import "./Tasks.scss";
import { TodoProps } from "../App";
import { removeTask } from "../functions/removeTask";

const Task = ({ todos, setTodos }: TodoProps) => {
  const handleRemoveTask = (id: string) => {
    removeTask(id, { todos, setTodos });
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
              <section>
                <h3>{todo.title}</h3>
                <p>{todo.about}</p>
              </section>
              <button onClick={() => handleRemoveTask(todo.id)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Task;
