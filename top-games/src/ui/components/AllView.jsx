import React, {useState} from 'react';
import { Container, Col, Row, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlotlyComponent from './PlotComponentExample';

const AllView = () => {
  const [selectGenre, setSelectGenre] = useState('GENRE');
  const [selectPlatform, setSelectPlatform] = useState('PLATFORM');

  const handleGenre = (eventKey, event) => {
    // Update the dropdown title when an option is selected
    setSelectGenre(eventKey);
  };

  const handlePlatform = (eventKey, event) => {
    // Update the dropdown title when an option is selected
    setSelectPlatform(eventKey);
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-end">
          <Col className="d-flex justify-content-start" xs = {3} style={{ paddingTop: "7px" }}>
            Showing rankings for
          </Col>
          <Col className="d-flex justify-content-start" xs = {2} style={{ paddingTop: "7px" }}>
            YEAR
          </Col>
          <Col className="d-flex justify-content-end" xs = {3} style={{ paddingTop: "7px" }}>
            Show games filtered by:
          </Col>
          <Col className="col-sm d-flex justify-content-end" xs = {2}>
            <Dropdown onSelect={handleGenre} as={ButtonGroup}>
              <Button className="filter-button" style={{ width: '90px' }} disabled>
                {selectGenre}
              </Button>
              <Dropdown.Toggle split className="filter-button" />
              <Dropdown.Menu align="end">
                <Dropdown.Item eventKey="Fantasy">Fantasy</Dropdown.Item>
                <Dropdown.Item eventKey="Puzzle">Puzzle</Dropdown.Item>
                <Dropdown.Item eventKey="Platformer">Platformer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="col-sm d-flex justify-content-end" xs = {2}>
            <Dropdown onSelect={handlePlatform} as={ButtonGroup}>
              <Button className="filter-button" style={{ width: '90px' }} disabled>
                {selectPlatform}
              </Button>
              <Dropdown.Toggle split className="filter-button" />
              <Dropdown.Menu align="end">
                <Dropdown.Item eventKey="Console">Console</Dropdown.Item>
                <Dropdown.Item eventKey="PC">PC</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <PlotlyComponent />
          <div id="samplePlot"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllView;