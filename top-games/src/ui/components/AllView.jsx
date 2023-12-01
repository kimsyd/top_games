import React, {useState} from 'react';
import { Container, Col, Row, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlotlyComponent } from './PlotComponentExample';

const AllView = () => {
  const [selectGenre, setSelectGenre] = useState('GENRE');
  const [selectConsole, setSelectConsole] = useState('CONSOLE');

  const handleGenre = (eventKey, event) => {
    // Update the dropdown title when an option is selected
    setSelectGenre(eventKey);
  };

  const handleConsole = (eventKey, event) => {
    // Update the dropdown title when an option is selected
    setSelectConsole(eventKey);
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
              <Button className="filter-button" style={{ width: '110px' }} disabled>
                {selectGenre}
              </Button>
              <Dropdown.Toggle split className="filter-button" />
              <Dropdown.Menu align="end">
                <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                <Dropdown.Item eventKey="Action-Adventure">Action-Adventure</Dropdown.Item>
                <Dropdown.Item eventKey="Adventure">Adventure</Dropdown.Item>
                <Dropdown.Item eventKey="Fighting">Fighting</Dropdown.Item>
                <Dropdown.Item eventKey="Misc">Misc</Dropdown.Item>
                <Dropdown.Item eventKey="Platform">Platform</Dropdown.Item>
                <Dropdown.Item eventKey="Puzzle">Puzzle</Dropdown.Item>
                <Dropdown.Item eventKey="Shooter">Shooter</Dropdown.Item>
                <Dropdown.Item eventKey="Simulation">Simulation</Dropdown.Item>
                <Dropdown.Item eventKey="Sports">Sports</Dropdown.Item>
                <Dropdown.Item eventKey="Strategy">Strategy</Dropdown.Item>
                <Dropdown.Item eventKey="Racing">Racing</Dropdown.Item>
                <Dropdown.Item eventKey="Role-Playing">Role-Playing</Dropdown.Item>
                <Dropdown.Item eventKey="GENRE">Reset</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="col-sm d-flex justify-content-end" xs = {2}>
            <Dropdown onSelect={handleConsole} as={ButtonGroup}>
              <Button className="filter-button" style={{ width: '110px' }} disabled>
                {selectConsole}
              </Button>
              <Dropdown.Toggle split className="filter-button" />
              <Dropdown.Menu align="end">
                <Dropdown.Item eventKey="DS">DS</Dropdown.Item>
                <Dropdown.Item eventKey="GB">GB</Dropdown.Item>
                <Dropdown.Item eventKey="GBA">GBA</Dropdown.Item>
                <Dropdown.Item eventKey="PC">PC</Dropdown.Item>
                <Dropdown.Item eventKey="PS">PS</Dropdown.Item>
                <Dropdown.Item eventKey="PS">PSN</Dropdown.Item>
                <Dropdown.Item eventKey="PSP">PSP</Dropdown.Item>
                <Dropdown.Item eventKey="PS2">PS2</Dropdown.Item>
                <Dropdown.Item eventKey="PS3">PS3</Dropdown.Item>
                <Dropdown.Item eventKey="PS4">PS4</Dropdown.Item>
                <Dropdown.Item eventKey="SNES">SNES</Dropdown.Item>
                <Dropdown.Item eventKey="Wii">Wii</Dropdown.Item>
                <Dropdown.Item eventKey="X360">X360</Dropdown.Item>
                <Dropdown.Item eventKey="3DS">3DS</Dropdown.Item>
                <Dropdown.Item eventKey="CONSOLE">Reset</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <PlotlyComponent genre={selectGenre} system={selectConsole} />
          <div id="samplePlot"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllView;