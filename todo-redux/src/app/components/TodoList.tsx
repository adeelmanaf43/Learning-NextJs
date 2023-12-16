import { useState } from "react";
import { eeditTodo, deleteTodo } from "../features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
export default function TodoList() {
  const todos = useSelector((state: any) => state.todos);
  return (
    <div className="space-y-4">
      {todos.map((todo: any) => (
        <div>
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
}

const Todo = ({ todo }: any) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(todo.text);
  const [isEdit, setIsEdit] = useState(false);
  const [todoo, setTodoo] = useState(todo);
  let todoContent;
  if (isEdit) {
    todoContent = (
      <div className="flex gap-x-2">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setTodoo({ ...todoo, text: e.target.value });
          }}
          type="text"
        />
        <button
          onClick={() => {
            setIsEdit(false);
            dispatch(eeditTodo(todoo));
          }}
        >
          Save
        </button>
      </div>
    );
  } else {
    todoContent = (
      <div className="flex gap-x-2">
        {todo.text}
        <button onClick={(e) => setIsEdit(true)}>Edit</button>
      </div>
    );
  }
  return (
    <div className="flex gap-x-2">
      {todoContent}
      <button
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};
