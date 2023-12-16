import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";
export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(text));
      }}
      className="flex mt-8 mb-4 gap-x-2"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button className="bg-black text-white px-4 py-2">Add Todo</button>
    </form>
  );
}
