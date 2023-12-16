"use client";
import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "@/store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
export default function Home() {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
    </div>
  );
}
