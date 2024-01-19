import { TodoProps } from "../App";

export const removeTask = (id: string, { todos, setTodos }: TodoProps) => {
  const findId = todos.filter((todo) => todo.id !== id);
  setTodos(findId);
};
