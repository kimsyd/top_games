import React, { useEffect } from 'react';
import Plotly from 'plotly.js/dist/plotly';
import createPlotlyComponent from 'react-plotly.js/factory';

import Papa from 'papaparse';

// testing this papaparse stuff
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
  });


const Plot = createPlotlyComponent(Plotly);

const PlotlyComponent = () => {
  useEffect(() => {
    // Your Plotly configuration and data
    const data = [{
      x: [readSalesAllPlat[0].totalSales, readSalesAllPlat[1].totalSales, readSalesAllPlat[3].totalSales, readSalesAllPlat[4].totalSales],
      y: [10, 11, 12, 13],
      type: 'scatter'
    }];

    const layout = {
      title: 'SAMPLE',
    };

    // Render the plot inside the HTML element with the id 'myPlot'
    Plotly.newPlot('samplePlot', data, layout);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="plotContainer" style={{ width: "100%" }}>
      {/* The HTML element with the id 'myPlot' where the Plotly plot will be rendered */}
      <div id="myPlot"></div>
    </div>
  );
};

export default PlotlyComponent;