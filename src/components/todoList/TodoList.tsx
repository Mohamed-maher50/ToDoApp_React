import React from "react";

import { motion } from "framer-motion";
import SingleTodo from "../SingleTodo";
import TaskType from "../../types/TaskType";
interface Props {
  todos: TaskType[];
  setTodos: React.Dispatch<React.SetStateAction<TaskType[]>>;
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
          key={todo._id}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </motion.div>
  );
};

export default TodoList;
