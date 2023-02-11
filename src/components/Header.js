import React from "react";
import s from "./Header.css";
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Row>
      <Col>
        <div className="root">YOUR TODO</div>
      </Col>
    </Row>
  );
}

export default Header;
