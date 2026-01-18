import React from 'react'
import radio_button from '../assets/radio_button.png'
import check_circle from '../assets/check_circle.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

      <div onClick={() => toggle(id)} 
         className='flex flex-1 items-center
               cursor-pointer'>
        <img src={isComplete ? check_circle : radio_button} alt="" className='w-7'/>
        <p className={'text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}'}
        >
          {text}
          </p>
      </div>

      <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-3.5
       cursor-pointer'/>

    </div>
  )
}

export default TodoItems
