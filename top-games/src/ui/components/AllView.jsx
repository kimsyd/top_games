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
      switch (selectGenre) {
        case "GENRE":
          minYear = 2000;
          maxYear = 2018;
          break;
        case "Fighting":
          minYear = 2005;
          maxYear = 2007;
          break;
        default:
          minYear = 2000;
          maxYear = 2000;
      }
      break;
    case "Eidos Interactive":
      minYear = 1995;
      maxYear = 2010;
      break;
    case "Electronic Arts":
      minYear = 1983;
      break;
    case "Koei Tecmo":
      minYear = 2009;  
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
      if (selectPublisher == "EA Sports") {
        minYear = 2000;
        maxYear = 2000;
      } else {
        minYear = 1995;
        maxYear = 2023;
      }
      break;
    case "Fighting":
      minYear = 1990;
      break;
    case "Racing":
      if (selectPublisher == "Eidos Interactive" || selectPublisher == "EA Sports") {
        minYear = 2000;
        maxYear = 2000;
      } else {
        minYear = 1985;
        maxYear = 2023;
      }
      break;
    default:
      // minYear = 1979;
      // maxYear = 2023;
  }
  
  // change the min and max years depending on both the genre and publisher
  if (selectGenre == "Action" && selectPublisher == "Activision") {
    minYear = 1996;
    maxYear = 1998;
  } else if (selectGenre == "Action-Adventure" && selectPublisher == "Activision") {
    minYear = 1995;
    maxYear = 2020;
  } else if (selectGenre == "Adventure" && selectPublisher == "Activision") {
    minYear = 1983;
    maxYear = 1985;
  } else if ((selectGenre == "Fighting" || selectGenre == "Misc" || selectGenre == "Simulation" || selectGenre == "Strategy" || selectGenre == "Role-Playing") && selectPublisher == "Activision") {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Platform" && selectPublisher == "Activision") {
    minYear = 1994;
    maxYear = 2017;
  } else if (selectGenre == "Puzzle" && selectPublisher == "Activision") {
    minYear = 1985;
    maxYear = 1987;
  } else if (selectGenre == "Shooter" && selectPublisher == "Activision") {
    minYear = 1997;
    maxYear = 2019;
  } else if (selectGenre == "Sports" && selectPublisher == "Activision") {
    minYear = 2019;
    maxYear = 2021;
  } else if (selectGenre == "Racing" && selectPublisher == "Activision") {
    minYear = 2009;
    maxYear = 2011;
  } else if (selectGenre == "Action" && selectPublisher == "Capcom") {
    minYear = 2005;
    maxYear = 2019;
  } else if (selectGenre == "Action-Adventure" && selectPublisher == "Capcom") {
    minYear = 1991;
    maxYear = 2023;
  } else if (selectGenre == "Adventure" && selectPublisher == "Capcom") {
    minYear = 1996;
    maxYear = 2021;
  } else if (selectGenre == "Misc" && selectPublisher == "Capcom") {
    minYear = 2020;
    maxYear = 2022;
  } else if (selectGenre == "Platform" && selectPublisher == "Capcom") {
    minYear = 2008;
    maxYear = 2018;
  } else if ((selectGenre == "Puzzle" || selectGenre == "Simulation" || selectGenre == "Sports" || selectGenre == "Strategy" || selectGenre == "Racing") && selectPublisher == "Capcom") {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Shooter" && selectPublisher == "Capcom") {
    minYear = 2010;
    maxYear = 2012;
  } else if (selectGenre == "Role-Playing" && selectPublisher == "Capcom") {
    minYear = 2010;
    maxYear = 2021;
  } else if (selectGenre == "Action" && selectPublisher == "Eidos Interactive") {
    minYear = 2008;
    maxYear = 2010;
  } else if (selectGenre == "Adventure" && selectPublisher == "Eidos Interactive") {
    minYear = 1998;
    maxYear = 2000;
  } else if (selectGenre == "Fighting" && selectPublisher == "Eidos Interactive") {
    minYear = 2002;
    maxYear = 2004;
  } else if ((selectGenre == "Misc" || selectGenre == "Platform" || selectGenre == "Puzzle" || selectGenre == "Simulation" || selectGenre == "Sports" || selectGenre == "Strategy") 
              && selectPublisher == "Eidos Interactive") 
  {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Shooter" && selectPublisher == "Eidos Interactive") {
    minYear = 2003;
    maxYear = 2008;
  } else if (selectGenre == "Role-Playing" && selectPublisher == "Eidos Interactive") {
    minYear = 1999;
    maxYear = 2004;
  } else if (selectGenre == "Action" && selectPublisher == "Electronic Arts") {
    minYear = 1995;
    maxYear = 2002;
  } else if (selectGenre == "Action-Adventure" && selectPublisher == "Electronic Arts") {
    minYear = 1993;
    maxYear = 2022;
  } else if ((selectGenre == "Adventure" || selectGenre == "Fighting" || selectGenre == "Misc" || selectGenre == "Puzzle") && selectPublisher == "Electronic Arts") {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Platform" && selectPublisher == "Electronic Arts") {
    minYear = 2007;
    maxYear = 2008;
  } else if (selectGenre == "Shooter" && selectPublisher == "Electronic Arts") {
    minYear = 2000;
    maxYear = 2020;
  } else if (selectGenre == "Simulation" && selectPublisher == "Electronic Arts") {
    minYear = 1985;
    maxYear = 2010;
  } else if (selectGenre == "Sports" && selectPublisher == "Electronic Arts") {
    minYear = 2006;
    maxYear = 2017;
  } else if (selectGenre == "Strategy" && selectPublisher == "Electronic Arts") {
    minYear = 2006;
    maxYear = 2018;
  } else if (selectGenre == "Racing" && selectPublisher == "Electronic Arts") {
    minYear = 1988;
    maxYear = 2014;
  } else if (selectGenre == "Role-Playing" && selectPublisher == "Electronic Arts") {
    minYear = 1998;
    maxYear = 2017;
  } else if (selectGenre == "Action" && selectPublisher == "Koei Tecmo") {
    minYear = 2012;
  } else if (selectGenre == "Action-Adventure" && selectPublisher == "Koei Tecmo") {
    minYear = 2020;
    maxYear = 2022;
  } else if (selectGenre == "Adventure" && selectPublisher == "Koei Tecmo") {
    minYear = 2022;
    maxYear = 2023;
  } else if (selectGenre == "Fighting" && selectPublisher == "Koei Tecmo") {
    minYear = 2014;
    maxYear = 2020;
  } else if ((selectGenre == "Misc" || selectGenre == "Platform" || selectGenre == "Puzzle" || selectGenre == "Shooter" || selectGenre == "Racing") && selectPublisher == "Koei Tecmo") {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Simulation" && selectPublisher == "Koei Tecmo") {
    minYear = 2021;
    maxYear = 2023;
  } else if (selectGenre == "Sports" && selectPublisher == "Koei Tecmo") {
    minYear = 2015;
    maxYear = 2017;
  } else if (selectGenre == "Role-Playing" && selectPublisher == "Koei Tecmo") {
    minYear = 2015;
    maxYear = 2023;
  } else if (selectGenre == "Action" && selectPublisher == "Nintendo") {
    minYear = 2014;
    maxYear = 2017;
  } else if (selectGenre == "Action-Adventure" && selectPublisher == "Nintendo") {
    minYear = 2006;
    maxYear = 2017;
  } else if ((selectGenre == "Adventure" || selectGenre == "Fighting" || selectGenre == "Misc" || selectGenre == "Shooter" || selectGenre == "Simulation" || selectGenre == "Strategy" || selectGenre == "Racing") 
              && selectPublisher == "Nintendo") 
  {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Platform" && selectPublisher == "Nintendo") {
    minYear = 2013;
    maxYear = 2015;
  } else if (selectGenre == "Puzzle" && selectPublisher == "Nintendo") {
    minYear = 1992;
    maxYear = 2014;
  } else if (selectGenre == "Sports" && selectPublisher == "Nintendo") {
    minYear = 1999;
    maxYear = 2001;
  } else if (selectGenre == "Role-Playing" && selectPublisher == "Nintendo") {
    minYear = 2016;
    maxYear = 2018;
  } else if (selectGenre == "Action" && selectPublisher == "Sega") {
    minYear = 2008;
    maxYear = 2021;
  } else if (selectGenre == "Action-Adventure" && selectPublisher == "Sega") {
    minYear = 2006;
    maxYear = 2020;
  } else if (selectGenre == "Adventure" && selectPublisher == "Sega") {
    minYear = 2019;
    maxYear = 2021;
  } else if (selectGenre == "Fighting" && selectPublisher == "Sega") {
    minYear = 2020;
    maxYear = 2022;
  } else if ((selectGenre == "Misc" || selectGenre == "Strategy") && selectPublisher == "Sega") {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Puzzle" && selectPublisher == "Sega") {
    minYear = 2016;
    maxYear = 2018;
  } else if (selectGenre == "Shooter" && selectPublisher == "Sega") {
    minYear = 2010;
    maxYear = 2013;
  } else if (selectGenre == "Simulation" && selectPublisher == "Sega") {
    minYear = 2010;
    maxYear = 2020;
  } else if (selectGenre == "Sports" && selectPublisher == "Sega") {
    minYear = 2006;
    maxYear = 2012;
  } else if (selectGenre == "Racing" && selectPublisher == "Sega") {
    minYear = 2010;
    maxYear = 2012;
  } else if (selectGenre == "Role-Playing" && selectPublisher == "Sega") {
    minYear = 2008;
    maxYear = 2021;
  } else if ((selectGenre == "Action" || selectGenre == "Adventure" || selectGenre == "Fighting" || selectGenre == "Platform" || selectGenre == "Puzzle" || selectGenre == "Shooter" || selectGenre == "Racing") 
              && selectPublisher == "Strategic Simulations") 
  {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Action-Adventure" && selectPublisher == "Strategic Simulations") {
    minYear = 1983;
    maxYear = 1990;
  } else if (selectGenre == "Misc" && selectPublisher == "Strategic Simulations") {
    minYear = 1989;
    maxYear = 1991;
  } else if (selectGenre == "Simulation" && selectPublisher == "Strategic Simulations") {
    minYear = 1979;
    maxYear = 1981;
  } else if (selectGenre == "Sports" && selectPublisher == "Strategic Simulations") {
    minYear = 1980;
    maxYear = 1982;
  } else if (selectGenre == "Role-Playing" && selectPublisher == "Strategic Simulations") {
    minYear = 1984;
    maxYear = 1994;
  } else if (selectGenre == "Action" && selectPublisher == "THQ") {
    minYear = 2000;
    maxYear = 2000;
  } else if ((selectGenre == "Action" || selectGenre == "Adventure" || selectGenre == "Misc" || selectGenre == "Puzzle" || selectGenre == "Simulation" || selectGenre == "Role-Playing") && selectPublisher == "THQ") {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Action-Adventure" && selectPublisher == "THQ") {
    minYear = 2003;
    maxYear = 2012;
  } else if (selectGenre == "Fighting" && selectPublisher == "THQ") {
    minYear = 2003;
    maxYear = 2010;
  } else if (selectGenre == "Platform" && selectPublisher == "THQ") {
    minYear = 2004;
    maxYear = 2007;
  } else if (selectGenre == "Shooter" && selectPublisher == "THQ") {
    minYear = 2004;
    maxYear = 2012;
  } else if (selectGenre == "Sports" && selectPublisher == "THQ") {
    minYear = 2005;
    maxYear = 2012;
  } else if ((selectGenre == "Strategy" || selectGenre == "Racing") && selectPublisher == "THQ") {
    minYear = 2004;
    maxYear = 2006;
  } else if (selectGenre == "Action" && selectPublisher == "Ubisoft") {
    minYear = 2006;
    maxYear = 2008;
  } else if (selectGenre == "Action-Adventure" && selectPublisher == "Ubisoft") {
    minYear = 2002;
    maxYear = 2018;
  } else if (selectGenre == "Adventure" && selectPublisher == "Ubisoft") {
    minYear = 1998;
    maxYear = 2002;
  } else if ((selectGenre == "Fighting" || selectGenre == "Misc" || selectGenre == "Puzzle" || selectGenre == "Strategy") && selectPublisher == "Ubisoft") {
    minYear = 2000;
    maxYear = 2000;
  } else if (selectGenre == "Platform" && selectPublisher == "Ubisoft") {
    maxYear = 2014;
  } else if (selectGenre == "Shooter" && selectPublisher == "Ubisoft") {
    minYear = 2001;
  } else if (selectGenre == "Simulation" && selectPublisher == "Ubisoft") {
    minYear = 2008;
    maxYear = 2010;
  } else if (selectGenre == "Sports" && selectPublisher == "Ubisoft") {
    minYear = 2007;
    maxYear = 2009;
  } else if ((selectGenre == "Racing" || selectGenre == "Role-Playing") && selectPublisher == "Ubisoft") {
    minYear = 2013;
    maxYear = 2015;
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