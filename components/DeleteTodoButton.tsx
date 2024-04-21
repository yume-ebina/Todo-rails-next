import axios from "axios";
import { useRouter } from "next/router";

type DeleteButtonProps = {
  id: number;
};

const DeleteTodoButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  //Todoを削除する関数
  const handledelete = async () => {
    if (!confirm("本当に削除しますか")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handledelete}
      className="mt-3 ml-auto flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Delete
    </button>
  );
};

export default DeleteTodoButton;
