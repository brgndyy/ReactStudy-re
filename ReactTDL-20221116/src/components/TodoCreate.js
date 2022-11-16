
import "./TodoCreate.css";

function TodoCreate(props) {

  return (
    <>
      <button type="submit" className="creatBtn change" value={props.insert} onClick={props.insertHandler}>
        +
      </button>
    </>
  );
}

export default TodoCreate;
