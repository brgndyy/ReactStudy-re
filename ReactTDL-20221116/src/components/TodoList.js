import React from 'react'
import TodoItem from './TodoItem'
import "./TodoList.css"

function TodoList(props) {
  return (
    <div className='listContainer'>
      {props.todo.map((item) => <TodoItem key={item.id} checked ={item.checked}  text = {item.text}/>)}
    </div>
  )
}

export default TodoList