import React, {useState} from 'react';
import { Container, Col, Row, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MultiComponent } from './MulitViewPlot';
import Slider from '@mui/material/Slider/Slider';
import Box from '@mui/material/Box';

const MultiView = () => {
  const [setYear, setSelectYear] = useState(2000);

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
          <Col className="d-flex" xs = {3} style={{ paddingTop: "7px" }}>
            Showing rankings for:
          </Col>
          <Col className="col-sm d-flex justify-content-start" xs = {2}>
            <Button className="filter-button" style={{ width: '110px' }} disabled>{setYear}</Button>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <MultiComponent year={setYear} />
          <div id="multiPlot"></div>

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

export default MultiView;