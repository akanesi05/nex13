
import Image from 'next/image'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import { getAsset } from 'node:sea'
import { getAllTodos } from '@/api'

export default async function Home() {
  const todos = await getAllTodos()
  console.log(todos)
  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-2'>
     <h1 className='text-4xl font-bold text-gray-700'>
      Nextjs13 TODOAPP
     </h1>
     <div className='w-full max-w-xl mt-5'>
      <div className='w-full px-8 py-6 bg-white shadow-md rounded-ng'>
        <AddTask/>
        <TodoList tasks={todos}/>
      </div>
     </div>
    </main>
   
  )
}
