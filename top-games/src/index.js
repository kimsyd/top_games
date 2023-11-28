import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Container, Col, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import PlotlyComponent from './ui/components/plot_component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <App />
    <Row>
      <Col className="col-md-8">
        <PlotlyComponent />
      </Col>
      <Col className="col-md-4">
        <DropdownButton id="dropdown-basic-button" title="Select Year">
          <Dropdown.Item>
            Testing 1
          </Dropdown.Item>
          <Dropdown.Item>
            Testing 2
          </Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
