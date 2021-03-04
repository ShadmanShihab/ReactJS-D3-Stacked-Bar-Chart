import React, { Component } from 'react';
import { render } from 'react-dom';
import { scaleBand, scaleLinear } from 'd3-scale';
import XYAxis from './axis/xy-axis.js';
import Grid from './grid/grid.js';
import Bar from './bar/bar.js';
import { transition } from 'd3-transition';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [
        { name: 'Sun', value: 1000 },
        { name: 'Mon', value: 50 },
        { name: 'Tue', value: 500 },
        { name: 'Wed', value: 300 },
        { name: 'thurs', value: 500 },
        { name: 'friday', value: 100 },
      ],
    }
  }
 

  componentDidMount() {
    fetch("http://localhost:8087/barChart")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const { data } = this.state;

    const parentWidth = 500;
    const margin = {
      top: 10,
      right: 10,
      bottom: 20,
      left: 40,
    };
    const ticks = 6;
    const t = transition().duration(1000);

    const width = parentWidth - margin.left - margin.right;
    const height = parentWidth * 0.5 - margin.top - margin.bottom;

    const xScale = scaleBand()
      .domain(data.map(d => d.name))
      .range([0, width])
      .padding(0.26);
    
    
    const yScale = scaleLinear()
      .domain([0, Math.max(...data.map(d => d.value))])
      .range([height, 0])
      .nice();

    return (
      <div className="bar-chart-layout">
        <h1 style={{textAlign: 'center'}}> Bar Chart </h1>
        <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Grid {...{ xScale, yScale, width, ticks, t }} />
            <Bar
              {...{
                xScale,
                yScale,
                data,
                height,
                t,
              }}
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default BarChart;