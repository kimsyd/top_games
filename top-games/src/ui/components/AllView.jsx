import React, {useState} from 'react';
import { Container, Col, Row, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlotlyComponent } from './AllViewPlot';
import Slider from '@mui/material/Slider/Slider';
import Box from '@mui/material/Box';

const AllView = () => {
  const [selectGenre, setSelectGenre] = useState('GENRE');
  const [selectPublisher, setSelectPublisher] = useState('PUBLISHER');
  const [setYear, setSelectYear] = useState(2000);
  
  //const [minYear, setMinYear] = useState(1979);
  //const [maxYear, setMaxYear] = useState(2023); 
  let minYear = 1979;
  let maxYear = 2023;

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

  // change the min and max years depending on the publisher name
  switch (selectPublisher) {
    case "Capcom":
      minYear = 1989;
      break;
    case "EA Sports":
      minYear = 2000;
      maxYear = 2020;
      break;
    case "Eidos Interactive":
      minYear = 1995;
      maxYear = 2010;
      break;
    case "Electronic Arts":
      minYear = 1983;
      break;
    case "Koei Tecmo":
      minYear = 2003;  
      break;
    case "Nintendo":
      minYear = 1984;
      maxYear = 2018;
      break;
    case "Sega":
      minYear = 1999;
      break;
    case "Strategic Simulations":
      maxYear = 2000;
      break;
    case "THQ":
      minYear = 2000;
      maxYear = 2015;
      break;
    case "Ubisoft":
      minYear = 1993;
      maxYear = 2021;
      break;
    default:
      minYear = 1979;
      maxYear = 2023;
  }

  // change the min and max years depending on the genre
  switch (selectGenre) {
    case "Action":
      minYear = 1995;
      break;
    case "Fighting":
      minYear = 1990;
      break;
    case "Racing":
      minYear = 1985;
      break;
    default:
      minYear = 1979;
      maxYear = 2023;
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-end">
          <Col className="d-flex" xs = {3} style={{ paddingTop: "7px" }}>
            Showing rankings for:
          </Col>
          <Col className="col-sm d-flex justify-content-start" xs = {2}>
            <Button className="filter-button" style={{ width: '110px' }} disabled>{setYear}</Button>
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
                <Dropdown.Item eventKey="Activision">Activision</Dropdown.Item>
                <Dropdown.Item eventKey="Capcom">Capcom</Dropdown.Item>
                <Dropdown.Item eventKey="EA Sports">EA Sports</Dropdown.Item>
                <Dropdown.Item eventKey="Eidos Interactive">Eidos Interactive</Dropdown.Item>
                <Dropdown.Item eventKey="Electronic Arts">Electronic Arts</Dropdown.Item>
                <Dropdown.Item eventKey="Koei Tecmo">Koei Tecmo</Dropdown.Item>
                <Dropdown.Item eventKey="Nintendo">Nintendo</Dropdown.Item>
                <Dropdown.Item eventKey="Sega">Sega</Dropdown.Item>
                <Dropdown.Item eventKey="Strategic Simulations">Strategic Simulations</Dropdown.Item>
                <Dropdown.Item eventKey="THQ">THQ</Dropdown.Item>
                <Dropdown.Item eventKey="Ubisoft">Ubisoft</Dropdown.Item>
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

          <Box sx={{width: 700, paddingTop: 2, paddingLeft: 15}}>
            <Slider
              aria-label="Year"
              defaultValue={2000}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={minYear}
              max={maxYear}
              onChange={handleYear}
            />
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default AllView;