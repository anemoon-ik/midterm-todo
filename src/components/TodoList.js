import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Row, Col } from "react-bootstrap";
import s from "./TodoList.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faTrash,
  faEdit,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState(todo);

  useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  function todoFilter(status) {
    if (status === "all") {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.status === status);
      setFiltered(newTodo);
    }
  }

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
    console.log("pressed");
  }

  return (
    <div>
      <Row>
        <Col className="filter">
          <ButtonGroup className="btns" aria-label="Basic example">
            <Button
              className="filter-btn"
              variant="secondary"
              onClick={() => todoFilter("all")}
            >
              All
            </Button>
            <Button
              className="filter-btn"
              variant="secondary"
              onClick={() => todoFilter("false")}
            >
              Active
            </Button>
            <Button
              className="filter-btn"
              variant="secondary"
              onClick={() => todoFilter("true")}
            >
              Done
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      {filtered.map((item) => (
        <div key={item.id} className="listItems">
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div className={!item.status ? s.done : ""}>{item.title}</div>
          )}

          {edit === item.id ? (
            <div>
              <Button onClick={saveTodo}>
                <FontAwesomeIcon icon={faSave} />
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
                className="btn"
                onClick={() => editTodo(item.id, item.title)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button className="btn" onClick={() => statusTodo(item.id)}>
                {item.status ? (
                  <FontAwesomeIcon icon={faLock} />
                ) : (
                  <FontAwesomeIcon icon={faLockOpen} />
                )}
              </Button>
            </div>
          )}
          {/* <div>{item.title}</div>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
          <button onClick={() => editTodo(item.id)}>Edit</button>
          <button onClick={() => statusTodo(item.id)}>Done</button> */}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
