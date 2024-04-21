import CreateTodoForm from "@/components/CreateTodoForm";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <CreateTodoForm />
      <Todos />
    </div>
  );
}
