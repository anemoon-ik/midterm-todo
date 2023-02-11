import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./AddTodo.css";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    if (value) {
      setTodo([
        ...todo,
        {
          id: uuid(),
          title: value,
          status: false,
        },
      ]);
      setValue("");
    }
  }
  return (
    <Row>
      <Col className="addForm">
        <FormControl
          placeholder="Life is full of hardships, lets add one more"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="btn" variant="secondary" onClick={saveTodo}>
          Save
        </Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
