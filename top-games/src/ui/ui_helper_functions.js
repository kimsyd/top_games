/* global DOM */
import Plotly from 'plotly.js/lib/core';
import { filterByYear, genresGrouped, salesByGenre } from '../data/Functions';
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

const colorPalette = ['#074378', '#053152', '#035d73', '#074f86', '#074473', '#2d7e9d', '#327bd7', '#076bb7', '#4f89b6', '#0c7bb3'];

function retrieveData(elem, index) {
  var trace = {
    x: [elem['Total Sales']],
    y: [elem.Title],
    orientation: 'h',
    type: 'bar',
    legendgroup: elem.Title,
    name: elem.Title,
    hoverinfo: 'x', // temporary disable
    marker: {
      color: colorPalette[index % colorPalette.length]
    }
  };
  return trace;
}

function retrieveGroupedData(elem, index) {
  var trace = {
    x: [elem[1]],
    y: [elem[0]],
    orientation: 'h',
    type: 'bar',
    legendgroup: elem[0],
    name: 'x',
    hoverinfo: elem[1], // temporary disable
    marker: {
      color: colorPalette[index % colorPalette.length]
    }
  };
  return trace;
}

export { retrieveData, retrieveGroupedData }
