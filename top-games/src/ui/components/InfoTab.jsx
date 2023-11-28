import React from 'react';
import { Col, Container } from 'react-bootstrap';

const InfoTab = () => (
  <Container style={{ backgroundColor: "#FF8191", borderRadius: "15px" }}>
    <Col style={{ padding: "15px"}}>
      <h3>Data Information</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin sit amet velit aliquet rhoncus. Nulla facilisi. Aliquam massa nibh, rutrum condimentum tempor ac, vestibulum vitae lorem. Praesent odio nisl, ullamcorper ut ex in, semper interdum ante. Mauris sit amet sapien vel ex rutrum fringilla vel sit amet nunc.
      </p>
      <h3>About the Creators</h3>
      <p>
        This visualization was created as a collaborative project for ICS 484 Data Visualization.
      </p>
      <h5>Sydney Kim</h5>
      <h5>Jordan Le</h5>
      <h5>Michael Sumaylo</h5>
    </Col>
  </Container>
);

export default InfoTab;