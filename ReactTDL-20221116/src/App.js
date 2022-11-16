import Card from "./components/Card";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import { useState } from "react";
import InsertTemplate from "./components/InsertTemplate";

function App() {
  const generateID = () => {
    return Math.floor(Math.random() * 10000);
  };

  const [todo, setTodo] = useState([
    {
      id: generateID(),
      text: "프로젝트 생성하기",
      checked: true,
    },
    {
      id: generateID(),
      text: "컴포넌트 스타일링 하기",
      checked: true,
    },
    {
      id: generateID(),
      text: "Context 만들기",
      checked: false,
    },
    {
      id: generateID(),
      text: "기능 구현하기",
      checked: false,
    },
  ]);

  const toDoHandler = (todos) => {
    const copyToDos = [...todo];

    copyToDos.unshift({ id: generateID(), text: todos, checked: false });

    setTodo(copyToDos);
    
  };

  return (
    <Card>
      <TodoTemplate>
        <TodoHead />
        <TodoList
          generateID={generateID}
          toDoHandler={toDoHandler}
          todo={todo}
        />
        <InsertTemplate todo={todo} toDoHandler={toDoHandler} />
      </TodoTemplate>
    </Card>
  );
}

export default App;
