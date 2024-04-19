import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import { TodoType } from "@/types/Todo";

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  //API叩いてtodoデータ取得
  const fetchTodos = async () => {
    try {
      const res = await axios.get<TodoType[]>("http://localhost:3000/todos");
      setTodos(res.data);
    } catch (error) {
      alert("失敗しました");
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="space-y-6 w-3/4 max-w-lg pt-10">
      <label className="block text-xl font-bold text-gray-700">
        Todo Index
      </label>
      <div className="items-center justify-center">
        {todos.map((todo) => (
          <Link href={`todos/${todo.id}`} key={todo.id}>
            <Todo todo={todo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Todos;
