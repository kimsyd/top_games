import Plotly from 'plotly.js/lib/core';
import 'top-games/src/data/Functions.js';
import {filterByGenre, filterByYear, filterByValues} from '../data/Functions';

export {retrieveData, createGenreView, createYearView};

function retrieveData(elem) {
  var trace = {
    x: [elem.TotalSales],
    y: [elem.Title],
    orientation: 'h',
    type: 'bar',
    legendgroup: elem.Title,
    name: elem.Title,
    hoverinfo: 'none', // temporary disable
  };
  return trace;
} // function to create trace from each elem in top 10 array

function createGenreView(genre) {
  const data = filterByGenre(videoGameSalesAllPlatforms, genre, 10);
  const traces = data.map((each) => retrieveData(each));
  const yValues = traces.map(item => item.y);

  let layout = {
    title: "Top 10 Video Games",
    font: {
      family: 'Tahoma',
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
    width: 1000,
    margin: {
      l: 300, // Adjust the left margin to accommodate long labels
      r: 50,
      t: 50,
      b: 50,
    },
  }
  return Plotly.newPlot(traces, layout);;
} // function to create view filtered by genre, takes String of genre as param

function createYearView(year) {
  const data = filterByValues(filterByYear(videoGameSalesAllPlatforms, year), 10);
  const traces = data.map((each) => retrieveData(each));
  const yValues = traces.map(item => item.y);

  let layout = {
    title: "Top 10 Video Games",
    font: {
      family: 'Tahoma',
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
    width: 1000,
    margin: {
      l: 300, // Adjust the left margin to accommodate long labels
      r: 50,
      t: 50,
      b: 50,
    },
  }

  const div = DOM.element('div');
  Plotly.newPlot(div, traces, layout);
  return div;
} // function to create view filtered by year, takes 4-digit year as param