import React from "react";
import { Todo } from "../../model/todo";
import { motion } from "framer-motion";
import SingleTodo from "../SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <motion.div
      initial={{
        x: "100vw",
      }}
      animate={{
        x: 0,
      }}
      className=" grid grid-cols-1  md:grid-cols-2 md:gap-4 lg:gap-4 "
    >
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </motion.div>
  );
};

export default TodoList;
