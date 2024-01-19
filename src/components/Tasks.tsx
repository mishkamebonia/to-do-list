import "./Tasks.scss";
import { TodoObject } from "../App";

interface TaskProps {
  todos: TodoObject[];
}

const Task = ({ todos }: TaskProps) => {
  console.log(todos);

  return (
    <div className="tasks">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="task">
            <section>
              <h3>{todo.title}</h3>
              <p>{todo.about}</p>
            </section>
            <button>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
