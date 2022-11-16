import React from "react";
import { useState } from "react";
import "./InsertTemplate.css";
import TodoInsert from "./TodoInsert";
import TodoCreate from "./TodoCreate";
function InsertTemplate(props) {
  const [insert, setInsert] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.toDoHandler(inputValue);

    setInputValue("");
  };

  const insertHandler = (e) => {
    setInsert(!insert);
    e.target.classList.toggle("change");
  };

  return (
    <div className="insertTemplate">
      {insert ? null : (
        <TodoInsert
          insert={insert}
          inputValueHandler={inputValueHandler}
          inputValue={inputValue}
          submitHandler={submitHandler}
        />
      )}

      <TodoCreate insert={insert} insertHandler={insertHandler} />
    </div>
  );
}

export default InsertTemplate;
