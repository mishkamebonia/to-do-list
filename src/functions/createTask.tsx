import { v4 as uuidv4 } from "uuid";
import { TodoProps } from "../App";

export const addTask = (
  titleValue: string,
  setTitleValue: React.Dispatch<React.SetStateAction<string>>,
  aboutValue: string,
  setAboutValue: React.Dispatch<React.SetStateAction<string>>,
  { todos, setTodos }: TodoProps
) => {
  if (titleValue !== "" && aboutValue !== "") {
    const newItem = [
      ...todos,
      {
        id: uuidv4(),
        title: titleValue,
        about: aboutValue,
      },
    ];

    setTitleValue("");
    setAboutValue("");
    setTodos(newItem);
  }
};
