import "./Tasks.scss";
import { TodoProps } from "../App";

const Task = ({ todos, setTodos }: TodoProps) => {
  const removeTask = (id: string) => {
    console.log(id);
    const findId = todos.filter((todo) => todo.id !== id);
    setTodos(findId);
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
              <button onClick={() => removeTask(todo.id)}>
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
