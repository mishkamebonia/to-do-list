import "./Alert.scss";
import { TodoObject } from "../App";

const Alert = (props: any) => {
  const { id, todos, setTodos, activeAlert, setActiveAlert } = props;

  const onSubmit = (id: string) => {
    const findId = todos.filter((todo: TodoObject) => todo.id !== id);
    setTodos(findId);
  };

  const onCancel = (id: string) => {
    if (id === activeAlert) {
      setActiveAlert(null);
    }
  };

  return (
    <div className="alert-remove">
      <h3>Delete this task?</h3>
      <section>
        <button onClick={() => onSubmit(id)}>Yes</button>
        <button onClick={() => onCancel(id)}>No</button>
      </section>
    </div>
  );
};

export default Alert;
