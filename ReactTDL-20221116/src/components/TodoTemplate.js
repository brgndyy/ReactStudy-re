import React from 'react'

import "./TodoTemplate.css"

function TodoTemplate(props) {
  return (
    <div className='templateContainer'>
        {props.children}
    </div>
  )
}

export default TodoTemplate