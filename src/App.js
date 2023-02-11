import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { Container } from "react-bootstrap";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Wake up",
      status: true,
    },
    {
      id: 2,
      title: "Pass midterm",
      status: false,
    },
    {
      id: 3,
      title: "Recover",
      status: false,
    },
  ]);

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
