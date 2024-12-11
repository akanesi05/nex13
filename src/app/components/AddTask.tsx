import React from 'react'

const AddTask = () => {
  return (
    
    <form className='mb-4 space-y-3'><input type="text" className='w-full border px-4 p-2 rounded-lg focus:outline-none focus:border-blue-400'/>
    <button className='w-full px-4 py-2 text-white bg-blue-500'>AddTask</button>
    </form>
  )
}

export default AddTask
