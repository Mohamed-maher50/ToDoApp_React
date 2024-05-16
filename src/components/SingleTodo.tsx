import React, { FormEventHandler, useState } from "react";

import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";
import { motion } from "framer-motion";
import TaskType from "../types/TaskType";
type Props = {
  todos: TaskType[];
  todo: TaskType;
  setTodos: React.Dispatch<React.SetStateAction<TaskType[]>>;
};
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(todo.task);

  const handleDone = (id: string) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  const handleDelete = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
  };
  const handleSubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === id ? { ...todo, todo: value } : todo
      )
    );
    setEdit(false);
  };
  return (
    <motion.form
      onSubmit={(e) => handleSubmit(e, todo._id)}
      initial={{
        y: "40vh",
      }}
      animate={{ y: 0 }}
      transition={{ type: "tween" }}
      className="flex  bg-white min-w-[400px] p-3 mt-2 "
      exit={{ y: "40vh" }}
    >
      {edit ? (
        <input
          value={value}
          type="text"
          className="grow pl-2"
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <span className={`grow ${!todo.isDone && "line-through"}`}>
          {todo.task}
        </span>
      )}

      <CiEdit
        onClick={() => setEdit(!edit)}
        className="  text-2xl   cursor-pointer hover:text-green-800  font-bold"
      />
      <RiDeleteBin6Line
        onClick={() => handleDelete(todo._id)}
        className=" cursor-pointer text-2xl font-bold hover:text-red-800"
      />
      <MdOutlineDone
        className="cursor-pointer  text-2xl font-bold hover:text-blue-800"
        onClick={() => handleDone(todo._id)}
      />
    </motion.form>
  );
};

export default SingleTodo;
