import React from "react";
import { Row, Col, Container, Tabs, Tab } from "react-bootstrap";
import AllView from './ui/components/AllView';
import InfoTab from './ui/components/InfoTab';
import MultiView from './ui/components/MultiView';

const App = () => (
  <Container>
    <Col>
      <Row>
        <h1 style={{ paddingTop: "30px", paddingBottom: "30px", paddingLeft: "0px", paddingRight: "0px" }}>Exploration of top-selling video games</h1>
      </Row>
      <Row>
        <Col style={{ paddingLeft: "0px", paddingRight: "0px" }} xs={8}>
          <Tabs defaultActiveKey="default" className="mb-3" justify selected="selected-tab">
            <Tab eventKey="default" title="See All Titles">
              <AllView />
            </Tab>
            <Tab eventKey="platform" title="See By Genre">
              <MultiView />
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
