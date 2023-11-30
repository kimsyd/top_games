import React, { useEffect } from 'react';
import Plotly from 'plotly.js/dist/plotly';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

const PlotlyComponent = () => {
  useEffect(() => {
    // Your Plotly configuration and data
    const data = [{
      x: [1, 2, 3, 4],
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
    <div id="plotContainer">
      {/* The HTML element with the id 'myPlot' where the Plotly plot will be rendered */}
      <div id="myPlot"></div>
    </div>
  );
};

export default PlotlyComponent;