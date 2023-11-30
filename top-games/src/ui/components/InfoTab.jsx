import React from 'react';
import { Col, Container } from 'react-bootstrap';

const InfoTab = () => (
  <Container style={{ backgroundColor: "#13293D", borderRadius: "15px" }}>
    <Col style={{ padding: "15px", color: "white" }}>
      <h3>Data Information</h3>
      <p>
        This dataset contains information on video game sales organized by year of release. The scope of this dataset includes titles with over 100,000 copies sold globally. In our visualization, we choose to break down this ranking over each year of release, showcasing the top 10 titles by global sales for each year of release. We include options to further sort the data based on genre and platform for deeper analysis.
      </p>
      <p>
        <a href="https://www.kaggle.com/datasets/gregorut/videogamesales/data" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>Source</a>
      </p>
      <h3>About the Creators</h3>
      <p>
        This visualization was created as a collaborative project for ICS 484 Data Visualization.
      </p>
      <h5><a href="https://kimsyd.github.io/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>Sydney Kim</a></h5>
      <h5>Jordan Le</h5>
      <h5><a href="https://msumaylo.github.io/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>Michael Sumaylo</a></h5>
    </Col>
  </Container>
);

export default InfoTab;