import { useState } from "react";
import { TodoObject } from "../App";

interface Props {
  todo: TodoObject;
  onEditTodo: (id: string, title: string, about: string) => void;
}

const EditForm = (props: Props) => {
  const { todo, onEditTodo } = props;

  const [changedTitle, setChangedTitle] = useState(todo.title);
  const [changedAbout, setChangedAbout] = useState(todo.about);

  const changeTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangedTitle(e.currentTarget.value);
  };

  const changeAboutValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangedAbout(e.currentTarget.value);
  };

  const onClickEditSubmit = (id: string) => {
    console.log(changedTitle, changedAbout);
    onEditTodo(id, changedTitle, changedAbout);
  };

  return (
    <div>
      <input type="text" value={changedTitle} onChange={changeTitleValue} />
      <textarea
        cols="30"
        rows="10"
        value={changedAbout}
        onChange={changeAboutValue}
      ></textarea>
      <button onClick={() => onClickEditSubmit(todo.id)}>edit</button>
    </div>
  );
};

export default EditForm;
