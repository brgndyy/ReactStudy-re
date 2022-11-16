import "./TodoInsert.css";

function TodoInsert(props) {
  return (
    <>
      {props.insert ? (
        <div className="toDoInsertContainer">
          <form onSubmit={props.submitHandler}>
            <input
              className="insertInput"
              value={props.inputValue}
              onChange={props.inputValueHandler}
              placeholder="할일을 입력하세요"
              type={"text"}
            />
          </form>
        </div>
      ) : (
        <div className="toDoInsertContainer show">
          <form onSubmit={props.submitHandler}>
            <input
              className="insertInput"
              value={props.inputValue}
              onChange={props.inputValueHandler}
              placeholder="할일을 입력하세요"
              type={"text"}
            />
          </form>
        </div>
      )}
    </>
  );
}

export default TodoInsert;
