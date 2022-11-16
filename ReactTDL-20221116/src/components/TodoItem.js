import React, { useState } from "react";
import "./TodoItem.css";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

function TodoItem(props) {
  const [check, setCheck] = useState(true);

  const checkHandler = (e) => {
    e.stopPropagation();
    setCheck(!check);
  };

  return (
    <>
      {props.checked === check ? (
        <div className="toDoContainer">
          <div className="checkBtn">
            <AiFillCheckCircle onClick={checkHandler} />
          </div>
          <div className="toDoTextDone">{props.text}</div>
          <div className="deleteBtn">
            <MdDeleteForever />
          </div>
        </div>
      ) : (
        <div className="toDoContainer">
          <div className="checkBtn">
            <AiOutlineCheckCircle onClick={checkHandler} />
          </div>
          <div className="toDoText">{props.text}</div>
          <div className="deleteBtn">
            <MdDeleteForever />
          </div>
        </div>
      )}
    </>
  );
}

export default TodoItem;
