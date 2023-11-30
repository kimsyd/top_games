import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './style.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Container, Col, Row, Tab, Tabs } from 'react-bootstrap';
import PlotlyComponent from './ui/components/PlotComponentExample';
import AllView from './ui/components/AllView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <App />
  </Container>
);
