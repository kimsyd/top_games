import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Container, Col, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import PlotlyComponent from './ui/components/plot_component';
import Papa from 'papaparse';

// testing this node.js filereading + papaparse stuff
let readSalesAllPlat = "";

Papa.parse('https://raw.githubusercontent.com/kimsyd/top_games/main/top-games/src/data/raw_data/video_game_sales_all_platforms.csv',
  {
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: true,
    transformHeader: undefined,
    dynamicTyping: true,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    step: undefined,
    complete: function(results,file){
      console.log("Parsing complete:", results, file);
      readSalesAllPlat = results.data;
      console.log(readSalesAllPlat[0]);
    },
    error: undefined,
    download: true,
    downloadRequestHeaders: undefined,
    downloadRequestBody: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    chunkSize: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP],
    skipFirstNLines: 0
  })



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
