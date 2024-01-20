const Alert = (props: any) => {
  const onSubmit = (id: string) => {
    const findId = props.todos.filter((todo: any) => todo.id !== id);
    props.setTodos(findId);
  };

  const onCancel = (id: string) => {
    if (id === props.activeAlert) {
      props.setActiveAlert(null);
    }
  };

  return (
    <div className="alert">
      <h3>Delete this task?</h3>
      <section>
        <button onClick={() => onSubmit(props.id)}>Yes</button>
        <button onClick={() => onCancel(props.id)}>No</button>
      </section>
    </div>
  );
};

export default Alert;
