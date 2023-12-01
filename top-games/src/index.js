import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './style.css';
import App from './App.jsx';
import { Container } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <App />
  </Container>
);
