import React, { useEffect, useState } from 'react';
import Plotly from 'plotly.js/dist/plotly';
import { filterByGenre, filterByValues, filterByYear, filterBySystem, filterByPublisher } from '../../data/Functions'

import Papa from 'papaparse';
import { retrieveData } from '../ui_helper_functions';

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

// do the const Promise and sleep AFTER parsing csv but BEFORE any data wrangling w/ our functions
const sleep = ms => new Promise(r => setTimeout(r, ms));
await sleep(3000);

/*function createGenreView(genre) {
  activeData = filterByGenre(readSalesAllPlat, genre, 10);
  activeTraces = activeData.map((each) => retrieveData(each));
} // function to create view filtered by genre, takes String of genre as param

function createYearView(year) {
  activeData = filterByValues(filterByYear(readSalesAllPlat, year), 10);
  activeTraces = activeData.map((each) => retrieveData(each));
}*/

console.log(readSalesAllPlat[0]);

const PlotlyComponent = ({ genre, publisher,  year }) => {
  console.log(year);
  let activeData;
  let yearData = filterByYear(readSalesAllPlat, year);
  console.log(yearData);
  if ((genre === 'GENRE') && (publisher === 'PUBLISHER')) {
    activeData = filterByValues(yearData, 10);
  }
  else if (genre !== 'GENRE') {
    activeData = filterByGenre(yearData, genre, 10);
  }
  //else if (console !== 'CONSOLE') {
  //  activeData = filterBySystem(readSalesAllPlat, console, 10)
  //}
  else if (publisher !== 'PUBLISHER'){
    activeData = filterByPublisher(yearData, publisher, 10);
  }
  else {
    //activeData = filterBySystem(filterByGenre(readSalesAllPlat, genre, 10), console, 10)
    activeData = filterByPublisher(filterByGenre(yearData, genre, 10), publisher, 10);
  }
      let activeTraces = activeData.map((each) => retrieveData(each));

      useEffect(() => {

        let layout = {
          title: "Top 10 Video Games",
          font: {
            family: 'Inconsolata',
            size: 12,
            color: '#2e313f'
          },
          yaxis: {
            autorange: 'reversed', // Display y-axis values in reverse order
            ticklen: 15
          },
          xaxis: {
            title: {
              text: 'Sales'
            },
          },
          showlegend: false,
          width: 700,
          margin: {
            l: 300,
            r: 70,
            t: 50,
            b: 50
          },
        }

        // Render the plot inside the HTML element with the id 'myPlot'
        //Plotly.newPlot('samplePlot', data, layout);
        Plotly.newPlot('samplePlot', activeTraces, layout);
      }, [activeTraces]); // Empty dependency array means this effect runs once on mount

      return (
        <div id="plotContainer">
          {/* The HTML element with the id 'myPlot' where the Plotly plot will be rendered */}
          <div id="myPlot"></div>
        </div>
      );
};

export { PlotlyComponent };