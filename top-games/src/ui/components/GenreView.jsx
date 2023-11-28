import React, {useState} from 'react';
import {Container, Col, Row, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GenreView = () => {
  const [dropdownTitle, setDropdownTitle] = useState('Genre');

  const handleSelect = (eventKey, event) => {
    // Update the dropdown title when an option is selected
    setDropdownTitle(eventKey);
  };

  return (
    <Container>
      <Row>
        <Col className="col-sm d-flex justify-content-end">
          <Col className="col-sm d-flex justify-content-end" style={{ paddingTop: "7px" }}>
            Choose a genre to filter view:
          </Col>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success">
              {dropdownTitle}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Fantasy">Fantasy</Dropdown.Item>
              <Dropdown.Item eventKey="Puzzle">Puzzle</Dropdown.Item>
              <Dropdown.Item eventKey="Platformer">Platformer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default GenreView;