import { useState } from "react";
import { TodoObject } from "../App";
import "./EditForm.scss";

interface Props {
  todo: TodoObject;
  onEditTodo: (id: string, title: string, about: string) => void;
  setEditAlert: React.Dispatch<React.SetStateAction<string | null>>;
}

const EditForm = (props: Props) => {
  const { todo, onEditTodo, setEditAlert } = props;

  const [changedTitle, setChangedTitle] = useState(todo.title);
  const [changedAbout, setChangedAbout] = useState(todo.about);

  const changeTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangedTitle(e.currentTarget.value);
  };

  const changeAboutValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangedAbout(e.currentTarget.value);
  };

  const onClickEditSubmit = (id: string) => {
    if (changedTitle !== "" && changedAbout !== "") {
      onEditTodo(id, changedTitle, changedAbout);
      setEditAlert(null);
    }
  };

  const onCancel = () => {
    setEditAlert(null);
  };

  return (
    <div>
      <div className="edit-form">
        <input
          type="text"
          placeholder="Text..."
          value={changedTitle}
          onChange={changeTitleValue}
        />
        <textarea
          placeholder="About..."
          value={changedAbout}
          onChange={changeAboutValue}
        ></textarea>
        <div className="row">
          <button onClick={() => onCancel()}>Cancel</button>
          <button onClick={() => onClickEditSubmit(todo.id)}>Save</button>
        </div>
      </div>
      <div className="module-background" onClick={() => onCancel()}></div>
    </div>
  );
};

export default EditForm;
