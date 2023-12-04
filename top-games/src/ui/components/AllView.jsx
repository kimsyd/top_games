import React, {useState} from 'react';
import { Container, Col, Row, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlotlyComponent } from './PlotComponentExample';
import Slider from '@mui/material/Slider/Slider';
import Box from '@mui/material/Box';

const AllView = () => {
  const [selectGenre, setSelectGenre] = useState('GENRE');
  const [selectPublisher, setSelectPublisher] = useState('PUBLISHER');
  const [setYear, setSelectYear] = useState(2000);


  const handleGenre = (eventKey, event) => {
    // Update the dropdown title when an option is selected
    setSelectGenre(eventKey);
  };

  const handlePublisher = (eventKey, event) => {
    // Update the dropdown title when an option is selected
    setSelectPublisher(eventKey);
  };

  // helper function to get the year value from the slider
  const handleYear = (event, newValue) => {
    setSelectYear(newValue);
  };

  function yearValue(value: year){
    return `year: ${value}`;
  }

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
            <Dropdown onSelect={handlePublisher} as={ButtonGroup}>
              <Button className="filter-button" style={{ width: '110px' }} disabled>
                {selectPublisher}
              </Button>
              <Dropdown.Toggle split className="filter-button" />
              <Dropdown.Menu align="end">
                <Dropdown.Item eventKey="Nintendo">Nintendo</Dropdown.Item>
                <Dropdown.Item eventKey="Capcom">Capcom</Dropdown.Item>
                <Dropdown.Item eventKey="Eletronic Arts">Electronic Arts</Dropdown.Item>
                <Dropdown.Item eventKey="Ubisoft">Ubisoft</Dropdown.Item>
                <Dropdown.Item eventKey="Sega">Sega</Dropdown.Item>
                <Dropdown.Item eventKey="PS">PSN</Dropdown.Item> // change the rest of these to other publishers
                <Dropdown.Item eventKey="PSP">PSP</Dropdown.Item> // refer to the original spreadsheet, observable has a way to
                <Dropdown.Item eventKey="PS2">PS2</Dropdown.Item> // see which are the most common entries on each column, so
                <Dropdown.Item eventKey="PS3">PS3</Dropdown.Item> // can put in the most common entries on the publishers column
                <Dropdown.Item eventKey="PS4">PS4</Dropdown.Item>
                <Dropdown.Item eventKey="SNES">SNES</Dropdown.Item>
                <Dropdown.Item eventKey="Wii">Wii</Dropdown.Item>
                <Dropdown.Item eventKey="X360">X360</Dropdown.Item>
                <Dropdown.Item eventKey="3DS">3DS</Dropdown.Item>
                <Dropdown.Item eventKey="PUBLISHER">Reset</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <PlotlyComponent genre={selectGenre} publisher={selectPublisher} year={setYear} />
          <div id="samplePlot"></div>

          <Box sx={{width: 700}}>
            <Slider
              aria-label="Year"
              defaultValue={2000}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1979}
              max={2023}
              onChange={handleYear}
            />
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default AllView;