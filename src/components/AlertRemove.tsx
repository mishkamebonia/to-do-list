import "./AlertRemove.scss";
import { TodoObject } from "../App";

interface alertProps {
  id: string;
  todos: TodoObject[];
  setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>;
  removeAlert: string | null;
  setRemoveAlert: React.Dispatch<React.SetStateAction<string | null>>;
}

const Alert = (props: alertProps) => {
  const { id, todos, setTodos, removeAlert, setRemoveAlert } = props;

  const onSubmit = (id: string) => {
    const findId = todos.filter((todo: TodoObject) => todo.id !== id);
    setTodos(findId);
  };

  const onCancel = (id: string) => {
    if (id === removeAlert) {
      setRemoveAlert(null);
    }
  };

  return (
    <div>
      <div className="alert-remove">
        <p>Delete this task?</p>
        <section>
          <button onClick={() => onSubmit(id)}>Yes</button>
          <button onClick={() => onCancel(id)}>No</button>
        </section>
      </div>
      <div className="module-background" onClick={() => onCancel(id)}></div>
    </div>
  );
};

export default Alert;
