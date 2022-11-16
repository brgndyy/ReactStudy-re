import React from 'react'
import "./TodoHead.css"

function TodoHead() {
    
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const year = new Date().getFullYear();
    const month = new Date().getMonth() +1 ;
    const date = new Date().getDate();
    const day = week[new Date().getDay()];

    const NowTime = `${year}년 ${month}월  ${date}일`

  return (
    <div className='toDoHeadContainer'>
        <h1>{NowTime}</h1>
        <p>{day + '요일'}</p>
        <div className='toDo-left'>
        <p>할일 N개 남음</p>
        </div>
    </div>
  )
}

export default TodoHead