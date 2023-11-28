import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Container, Col, Row, Tab, Tabs } from 'react-bootstrap';
import PlotlyComponent from './ui/components/plot_component';
import GenreView from './ui/components/GenreView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <App />
  </Container>
);
