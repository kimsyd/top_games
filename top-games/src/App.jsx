import React from "react";
import { Row, Col, Container, Navbar, Tabs, Tab } from "react-bootstrap";
import GenreView from './ui/components/GenreView';
import InfoTab from './ui/components/InfoTab';

const App = () => (
  <Container>
    <Col>
      <Row>
        <h1 style={{ paddingTop: "30px", paddingBottom: "30px", paddingLeft: "0px", paddingRight: "0px" }}>Exploration of top-selling video games of each year</h1>
      </Row>
      <Row>
        <Col style={{ paddingLeft: "0px", paddingRight: "0px" }} xs={8}>
          <Tabs defaultActiveKey="default" className="mb-3" justify>
            <Tab eventKey="default" title="All Games">
              Default View
            </Tab>
            <Tab eventKey="genre" title="Filter by Genre">
              <GenreView />
            </Tab>
            <Tab eventKey="platform" title="Filter by Platform">
              Filter by platform
            </Tab>
          </Tabs>
        </Col>
        <Col xs={4} style={{ paddingLeft: "30px"}}>
          <InfoTab />
        </Col>
      </Row>
    </Col>
  </Container>
);

export default App;
