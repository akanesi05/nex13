// import { Task } from '@/types'
// import React from 'react'

// interface TodoListProps {
//     todo:Task
// }
// const Todo = () => {
//   return (
//     <li key={todo.id} className='flex justify-between p-4 bg-white border-blue-500 rounded-shadow'><span>{todo.text}</span>
//     <div>
//       <button className='text-green-500 mr-3'>
//        edit
//       </button>
//       <button className='text-yellow-500 mr-3'>
//         Delete
//       </button>
//     </div>
//     </li>
//   )
// }

// export default Todo


import { Task } from "@/types";
interface TodoProps {
  task: Task;
}
export default function Todo({ task }: TodoProps) {
  return (
    <li
      key={task.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      <span className="text-gray-700">{task.text}</span>
      <button className="text-red-500 hover:text-red-700">✖</button>
    </li>
  );
}

