import React, { FormEvent, useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}

const InputFelid: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className=" w-10/12 flex relative items-center justify-center"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        placeholder="Enter a task"
        className="w-full rounded-full  outline-none shadow-xl py-4 px-7"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className=" -translate-x-14 rounded-full hover:bg-slate-400 duration-300  bg-mainBlue w-[50px] h-[50px]  text-white shadow-circle"
      >
        Go
      </button>
    </form>
  );
};

export default InputFelid;
